import { PersonRouteInterface, PointRouteInterface, RoutesPathInterface } from "../type/data-simulation";

export const BroadcasterIniialPoints: PointRouteInterface[] = [
    {longitude: 110.37774975149341, latitude:-7.93941495300443}
]

export const Broadcaster1Points: PointRouteInterface[] = [
    {longitude: 110.37846967678047, latitude:-7.939345825406079}
]

export const Broadcaster2Points: PointRouteInterface[] = [
    {longitude: 110.37903292000232, latitude:-7.939608494343517}
]

export const Broadcaster3Points: PointRouteInterface[] = [
    {longitude: 110.37816138293437, latitude:-7.939466343866684}
]

export const Broadcaster4Points: PointRouteInterface[] = [
    {longitude: 110.37873143551633, latitude:-7.9394600706629035}
]

export const ConnectorPoints: PointRouteInterface[] = [
    {longitude: 110.38136612334523, latitude:-7.936935660927347}
]

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

export const SegmentlongPoints: PointRouteInterface[] = [
    {longitude: 110.3792054304514,  latitude: -7.9424330150509945},
    {longitude: 110.37935254454453, latitude: -7.942168685887069},
    {longitude: 110.3796292357834,  latitude:-7.9418555003637294},
    {longitude: 110.37985510618381, latitude: -7.941430462485684},
    {longitude: 110.38004144926299, latitude: -7.941072535510685},
    {longitude: 110.38022779234421, latitude: -7.940401421591702},
    {longitude: 110.38043672246374, latitude: -7.940054678970995},
    {longitude: 110.38050448358518, latitude: -7.939914863314954},


    {longitude: 110.38050706221162, latitude: -7.9399008939218305},
    {longitude: 110.38066395879798, latitude: -7.939619244924515},
    {longitude: 110.38077672821743, latitude: -7.9392890355101855},
    {longitude: 110.38086988556535, latitude: -7.939026810197632},
    {longitude: 110.38093852782174, latitude: -7.938720880454326},
    {longitude: 110.38096304291321, latitude: -7.9385169271662335},
    {longitude: 110.38113464855138, latitude: -7.9385849116064975},
    {longitude: 110.38125722400855, latitude: -7.938638327944673},
    {longitude: 110.38138470248367, latitude: -7.938298405672938},
    {longitude: 110.38145334474007, latitude: -7.938055603877459},
    {longitude: 110.38149747190272, latitude: -7.937837082122442},
    {longitude: 110.38153179303004, latitude: -7.937633128395646},
    {longitude: 110.38157592019496, latitude: -7.937414606432341},
    {longitude: 110.38156611412961, latitude: -7.9371912282944095},
    {longitude: 110.38156611412961, latitude: -7.936982418196493},
    {longitude: 110.38157101714751, latitude: -7.93686587297897},
]

export const SegementInitialRoute : RoutesPathInterface = {
    pathName: 'segment0',
    routes: BroadcasterIniialPoints
}

export const SegementBroadcaster1Route : RoutesPathInterface = {
    pathName: 'segment0',
    routes: Broadcaster1Points
}

export const SegementBroadcaster2Route : RoutesPathInterface = {
    pathName: 'segment0',
    routes: Broadcaster2Points
}

export const SegementBroadcaster3Route : RoutesPathInterface = {
    pathName: 'segment0',
    routes: Broadcaster3Points
}

export const SegementBroadcaster4Route : RoutesPathInterface = {
    pathName: 'segment0',
    routes: Broadcaster4Points
}


export const SegementConnectorRoute : RoutesPathInterface = {
    pathName: 'segment0',
    routes: ConnectorPoints
}

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

export const SegementLongRoute : RoutesPathInterface = {
    pathName: 'segmentlong',
    routes: SegmentlongPoints
}

export const RouteBus1 :PersonRouteInterface = {
    deviceId: 'bus-1',
    segmentsroute: [
        Segement1Route,
        Segement2Route,
        Segement3Route,
        Segement4Route,
    ]
}

export const RouteBus2 :PersonRouteInterface = {
    deviceId: 'bus-2',
    segmentsroute: [
        Segement1Route,
        Segement2Route,
        SegementLongRoute
    ]
}

export const RoutePerson1 :PersonRouteInterface = {
    deviceId: 'device-1',
    segmentsroute: [
        SegementInitialRoute,
    ]
}

export const RoutePerson2 :PersonRouteInterface = {
    deviceId: 'device-2',
    segmentsroute: [
        SegementBroadcaster1Route,
    ]
}

export const RoutePerson3 :PersonRouteInterface = {
    deviceId: 'device-3',
    segmentsroute: [
        SegementBroadcaster2Route,
    ]
}

export const RoutePerson4 :PersonRouteInterface = {
    deviceId: 'device-4',
    segmentsroute: [
        SegementBroadcaster3Route,
    ]
}

export const RoutePerson5 :PersonRouteInterface = {
    deviceId: 'device-5',
    segmentsroute: [
        SegementBroadcaster4Route,
    ]
}

export const RoutePersonConnector :PersonRouteInterface = {
    deviceId: 'device-connector',
    segmentsroute: [
        SegementConnectorRoute,
    ]
}