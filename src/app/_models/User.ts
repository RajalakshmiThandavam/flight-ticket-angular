import { Role } from './Role';

export class User {
    // id: number;
    // username: string;
    // password: string;
    // first_Name: string;
    // last_Name: string;
    // token: string;
    // email: string;
    // address: string;
    // phone_Number: number;
    // gender: string;
    // flightId: number;
    // date_of_birth: Date;

    constructor(
        // public id: number,
        // public username: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public dateOfBirth: Date,
        // public address: string,
        public phoneNumber: number,
        public token: string,
        public role: string
        // public gender: string,
        // public flightId: number,
        
    ) {}
}