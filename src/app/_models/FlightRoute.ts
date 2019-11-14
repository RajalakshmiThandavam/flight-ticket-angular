export interface IFlightRoute {
	id?: number;
	routeNumber?: string;
	routeDescription?: string;
	// flightId: number
}

export class FlightRoute implements IFlightRoute {
	constructor(
		id?: number,
		routeNumber?: string,
		routeDescription?: string
	) {}
}