import { User } from "./user";
import { Customer } from "./customer";

export class SalesRep implements User {
    forenames: string;
    surname: string;
    nickname?: string;
    emailAddress: string;
    role: string;
    dateCreated: Date;
    dateRemoved?: Date;
    locked: boolean;
    failedLoginAttempts: number;
    customers: Customer[];

    firstName() {
        return this.forenames.split(" ",1)[0];
    }
    fullName() {
        return this.firstName+" "+this.surname;
    }
}