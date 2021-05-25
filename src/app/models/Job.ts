export interface IJob {
    id:number;
    name: string;
    description: string;
    employerId: string;
    type: string;
    userCount: number;
}

export class Job implements IJob{
    id:number;
    name: string;
    description: string;
    employerId: string;
    type: string;
    userCount: number;

    constructor(name, description, type, employerId, userCount) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.employerId = employerId;
        this.userCount = userCount;
    }
  
}