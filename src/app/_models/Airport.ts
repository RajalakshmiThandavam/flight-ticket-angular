import { IAirlines } from './Airlines';

export interface IAirport {
	id?: number;
	airportCode?: string;
    airportName?: string;
    country?: string;
    city?: string;
    airlines?: IAirlines;
}

export class Airport implements IAirport {
    constructor(
        id?: number,
        airportCode?: string,
        airportName?: string,
        country?: string,
        city?: string,
        airlines?: IAirlines
    ) {}
}