export interface IAirlines {
    id?: number;
    name?: string;
    code?: string;
    totalSeats?: number;
    // airportId?: number;
    // flightId?: number;
}

export class Airlines implements IAirlines {
    constructor(
        public id?: number,
        public name?: string,
        public code?: string,
        public totalSeats?: number,
        // public airportId?: number,
        // public flightId?: number
    ) {}
}
