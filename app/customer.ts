import { User } from "./user";

export class Customer implements User {
    forenames: string;
    surname: string;
    nickname?: string;
    emailAddress: string;
    role: string;
    dateCreated: Date;
    dateRemoved?: Date;
    locked: boolean;
    failedLoginAttempts: number;

    lastLoginDate: Date;

    firstName() {
        if (this.nickname) {
            return this.nickname;
        } else {
            return this.forenames.split(" ",1)[0];
        }
    }
    fullName() {
        return this.firstName+" "+this.surname;
    }
}