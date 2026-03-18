"use client";

import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function SimulationMap() {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<maplibregl.Map | null>(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;
        if (mapRef.current) return;

        const map = new maplibregl.Map({
            container: mapContainerRef.current,
            style: `https://api.maptiler.com/maps/base-v4/style.json?key=${process.env.NEXT_PUBLIC_TOKEN_MAP}`,
            center: [110.3783366, -7.9408833],
            zoom: 15,
            attributionControl: false,
        });

        mapRef.current = map;

        map.addControl(new maplibregl.NavigationControl(), "top-right");

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