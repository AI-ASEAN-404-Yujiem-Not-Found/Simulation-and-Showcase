export interface NodeIntarface {
    deviceId: string;
    keepDataStatus: string | null;
    releaseDataStatus: string | null;
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

export interface SimulationAgentData {
  deviceId: string;
  longitude: number;
  latitude: number;
}