export interface NodeIntarface {
    deviceId: string;
    keepDataStatus: boolean;
    releaseDataStatus: boolean;
    radius: number;
    longitude: number;
    latitude: number;
}

export interface PointRouteInterface {
    longitude: number;
    latitude: number;
}

export interface RoutesPathInterface {
    pathName: string;
    routes: PointRouteInterface[];
}

export interface PersonRouteInterface {
    deviceId: string;
    segmentsroute: RoutesPathInterface[];
}