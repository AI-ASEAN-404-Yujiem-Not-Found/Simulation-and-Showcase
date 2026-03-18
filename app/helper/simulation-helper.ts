import { PersonRouteInterface, RoutesPathInterface } from "../type/data-simulation";

export function flattenRoute(person: PersonRouteInterface) {
    return person.segmentsroute.flatMap((seg: RoutesPathInterface) => seg.routes);
}

export function haversineDistanceMeters(
    lon1: number,
    lat1: number,
    lon2: number,
    lat2: number
) {
    const R = 6371000; // meter
    const toRad = (v: number) => (v * Math.PI) / 180;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) *
            Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) ** 2;

    return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}