import { PersonRouteInterface, RoutesPathInterface } from "../type/data-simulation";

export function flattenRoute(person: PersonRouteInterface) {
    return person.segmentsroute.flatMap((seg: RoutesPathInterface) => seg.routes);
}