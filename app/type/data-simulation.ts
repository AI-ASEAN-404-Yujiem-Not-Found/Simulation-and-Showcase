export interface NodeIntarface {
    deviceId: string;
    keepDataStatus: boolean;
    releaseDataStatus: boolean;
    radius: number;
    latitude: number;
    longitude: number;
}

export interface RouteInterface {
    latitude: number;
    longitude: number;
}

export interface RoutesPathInterface {
    pathName: string;
    routes: RouteInterface[];
}