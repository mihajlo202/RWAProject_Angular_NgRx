export interface IJobEmployed {
    id:number;
    jobId:number;
    workerId:number;
}

export class JobEmployed implements IJobEmployed{
    id:number;
    jobId:number;
    workerId:number;

    constructor(jobId, workerId) {
        this.jobId = jobId;
        this.workerId = workerId;
    }
}