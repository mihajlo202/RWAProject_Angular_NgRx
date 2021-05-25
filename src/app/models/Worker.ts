export interface IWorker {
    id:number;
    name: string;
    surname: string;
    email: string;
    type: string;
    status: string;
}

export class Worker implements IWorker{
    id:number;
    name: string;
    surname: string;
    email: string;
    type: string;
    status: string;

    constructor(name, surname, email, type, status) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.type = type;
        this.status = status;
    }
  
}