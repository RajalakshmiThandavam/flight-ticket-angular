export interface IEmail {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export class Email implements IEmail {
    constructor(
        public name?: string,
        public email?: string,
        public subject?: string,
        public message?: string
    ) {}
}