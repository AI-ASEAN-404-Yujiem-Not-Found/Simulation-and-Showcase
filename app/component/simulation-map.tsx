/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type { FeatureCollection, Point, LineString } from "geojson";

import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import {
    RoutePerson1,
    RoutePerson2,
    RoutePerson3,
    RoutePerson4,
    RoutePerson5,
    RouteBus1,
    RouteBus2,
    RoutePersonConnector,
} from "../data/points-simulation";
import { flattenRoute, haversineDistanceMeters } from "../helper/simulation-helper";

export default function SimulationMap() {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<maplibregl.Map | null>(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;
        if (mapRef.current) return;

        const map = new maplibregl.Map({
            container: mapContainerRef.current,
            style: `https://api.maptiler.com/maps/base-v4/style.json?key=${process.env.NEXT_PUBLIC_TOKEN_MAP}`,
            center: [110.37912969566156, -7.940984246579163],
            zoom: 15,
            attributionControl: false,
        });

        mapRef.current = map;

        map.addControl(new maplibregl.NavigationControl(), "top-right");

        map.on("load", () => {

            const persons = [
                RoutePerson1,
                RoutePerson2,
                RoutePerson3,
                RoutePerson4,
                RoutePerson5,
                RouteBus1,
                RouteBus2,
                RoutePersonConnector
            ];

            const agents = persons.map((p) => ({
                deviceId: p.deviceId,
                route: flattenRoute(p),
                index: 0,
            }));

            const geojson: FeatureCollection<Point> = {
                type: "FeatureCollection",
                features: agents.map((a) => ({
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates: [
                            a.route[0].longitude,
                            a.route[0].latitude,
                        ],
                    },
                    properties: {
                        deviceId: a.deviceId,
                    },
                })),
            };

            const connectionLines: FeatureCollection<LineString> = {
                type: "FeatureCollection",
                features: [],
            };

            map.addSource("persons", {
                type: "geojson",
                data: geojson,
            });

            map.addLayer({
                id: "persons-circle",
                type: "circle",
                source: "persons",
                paint: {
                    "circle-radius": 5,
                    "circle-color": "#007AFF",
                    "circle-stroke-width": 2,
                    "circle-stroke-color": "#ffffff",
                },
            });

            map.addLayer({
                id: "persons-label",
                type: "symbol",
                source: "persons",
                layout: {
                    "text-field": ["get", "deviceId"],
                    "text-size": 12,
                    "text-offset": [0, -1.8],
                    "text-anchor": "top",
                },
                paint: {
                    "text-color": "#000000",
                    "text-halo-color": "#ffffff",
                    "text-halo-width": 1.5,
                },
            });

            map.addSource("connections", {
                type: "geojson",
                data: connectionLines,
            });

            map.addLayer({
                id: "connections-layer",
                type: "line",
                source: "connections",
                paint: {
                    "line-color": "#34C759",
                    "line-width": 2,
                    "line-opacity": 0.8,
                },
            });

            const interval = setInterval(() => {
                geojson.features.forEach((feature: any, i: number) => {
                    const agent = agents[i];

                    agent.index++;

                    if (agent.index >= agent.route.length) {
                        agent.index = 0;
                    }

                    const point = agent.route[agent.index];

                    feature.geometry.coordinates = [
                        point.longitude,
                        point.latitude,
                    ];
                });

                connectionLines.features = [];

                const features = geojson.features;

                for (let i = 0; i < features.length; i++) {
                    for (let j = i + 1; j < features.length; j++) {

                        const coordA = features[i].geometry.coordinates;
                        const coordB = features[j].geometry.coordinates;

                        const dist = haversineDistanceMeters(
                            coordA[0],
                            coordA[1],
                            coordB[0],
                            coordB[1]
                        );

                        if (dist <= 50) {
                            connectionLines.features.push({
                                type: "Feature",
                                geometry: {
                                    type: "LineString",
                                    coordinates: [coordA, coordB],
                                },
                                properties: {},
                            });
                        }
                    }
                }

                (map.getSource("persons") as maplibregl.GeoJSONSource)
                    .setData(geojson);

                (map.getSource("connections") as maplibregl.GeoJSONSource)
                    .setData(connectionLines);

            }, 1000);

            map.on("remove", () => clearInterval(interval));
        });

        map.on("click", (e) => {
            const { lng, lat } = e.lngLat;
            console.log(lng, lat)
        })

        return () => {
            map.remove();
            mapRef.current = null;
        };
    }, []);

    return (
        <div className="w-full h-full">
            <div
                ref={mapContainerRef}
                style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "400px",
                }}
            />
        </div>
    );
}