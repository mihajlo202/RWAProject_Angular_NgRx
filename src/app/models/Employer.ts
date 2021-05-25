export interface IEmployer {
    id:number;
    name: string;
    surname: string;
    email: string;
    company: string;
}

export class Employer implements IEmployer{
    id:number;
    name: string;
    surname: string;
    email: string;
    company: string;

    constructor(name, surname, email, company) {
        this.name = name;
        this.surname = surname;
        this.email=email;
        this.company=company;
    }
  
}