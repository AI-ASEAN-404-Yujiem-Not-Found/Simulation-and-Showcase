import { PersonRouteInterface, PointRouteInterface, RoutesPathInterface } from "../type/data-simulation";

export const Segment1Points: PointRouteInterface[] = [
    {longitude: 110.37765489981086, latitude:-7.941855574072562},
    {longitude: 110.37820743486759, latitude:-7.941159574833961},
    {longitude: 110.37867413923613, latitude:-7.940607024979798},
    {longitude: 110.37909256384393, latitude:-7.940155421182098},
    {longitude: 110.37940370008891, latitude:-7.939671938918366},
    {longitude: 110.37943052217906, latitude:-7.939592243985018},
]

export const Segment2Points: PointRouteInterface[] = [
    {longitude: 110.37944661539944, latitude:-7.93958047834316},
    {longitude: 110.37976311606411, latitude:-7.939633608301918},
    {longitude: 110.38006352347185, latitude:-7.939692051248244},
    {longitude: 110.38050340575217, latitude:-7.9399098839760995},
]

export const Segment3Points: PointRouteInterface[] = [
    {longitude: 110.38050448358518, latitude: -7.939914863314954},
    {longitude: 110.38043672246374, latitude: -7.940054678970995},
    {longitude: 110.38035766782315, latitude: -7.940172124084853},
    {longitude: 110.38022779234421, latitude: -7.940401421591702},
    {longitude: 110.38012050390358, latitude: -7.9407761269981165},
    {longitude: 110.38004144926299, latitude: -7.941072535510685},
    {longitude: 110.37985510618381, latitude: -7.941430462485684},
    {longitude: 110.3796292357834,  latitude:-7.9418555003637294},
    {longitude: 110.37935254454453, latitude: -7.942168685887069},
    {longitude: 110.3792054304514,  latitude: -7.9424330150509945},
]

export const Segment4Points: PointRouteInterface[] = [
    {longitude: 110.37919413692748, latitude: -7.942455385418185},
    {longitude: 110.37882709752887, latitude: -7.942332348362328},
    {longitude: 110.37848829192819, latitude: -7.942259644630482},
    {longitude: 110.3781777201275, latitude: -7.942186940885819},
    {longitude: 110.37775985988839, latitude: -7.942103051933387},
    {longitude: 110.37773727284787, latitude: -7.941991199970147},
    {longitude: 110.37766951172858, latitude: -7.941845792372874},
]

export const Segement1Route : RoutesPathInterface = {
    pathName: 'segment1',
    routes: Segment1Points
}

export const Segement2Route : RoutesPathInterface = {
    pathName: 'segment2',
    routes: Segment2Points
}

export const Segement3Route : RoutesPathInterface = {
    pathName: 'segment3',
    routes: Segment3Points
}

export const Segement4Route : RoutesPathInterface = {
    pathName: 'segment4',
    routes: Segment4Points
}

export const RoutePerson1 :PersonRouteInterface = {
    deviceId: 'device-1',
    segmentsroute: [
        Segement1Route,
        Segement2Route,
        Segement3Route,
    ]
}

export const RoutePerson2 :PersonRouteInterface = {
    deviceId: 'device-2',
    segmentsroute: [
        Segement2Route,
        Segement3Route,
    ]
}

export const RoutePerson3 :PersonRouteInterface = {
    deviceId: 'device-3',
    segmentsroute: [
        Segement1Route,
        Segement2Route,
    ]
}

export const RoutePerson4 :PersonRouteInterface = {
    deviceId: 'device-4',
    segmentsroute: [
        Segement3Route,
        Segement4Route,
    ]
}

export const RoutePerson5 :PersonRouteInterface = {
    deviceId: 'device-5',
    segmentsroute: [
        Segement4Route,
        Segement1Route,
        Segement2Route,
    ]
}