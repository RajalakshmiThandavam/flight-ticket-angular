import { Time } from '../../../node_modules/@angular/common';
import { Moment } from '../../../node_modules/moment';
import { IAirlines } from './Airlines';
import { IFlightRoute } from './FlightRoute';

export interface IFlight {
	id?: number;
	flightNumber?: string;
    departureCity?: string;
    arrivalCity?: string;
    dateOfDeparture?: Date;
    estimatedDepartureTime?: Moment;
    dateOfArrival?: Date;
    estimatedArrivalTime?: Moment;
    airlines?: IAirlines;
    flightRoute?: IFlightRoute;
    priceOfSeat?: number;
    // seat?: number;
    // book?: number;
    // status?: string;
    
}

export class Flight implements IFlight {
    constructor(
        id?: number,
        flightNumber?: string,
        departureCity?: string,
        arrivalCity?: string,
        dateOfDeparture?: Date,
        estimatedDepartureTime?: Moment,
        dateOfArrival?: Date,
        estimatedArrivalTime?: Moment,
        airlines?: IAirlines,
        flightRoute?: IFlightRoute,
        priceOfSeat?: number
    ) {}
}