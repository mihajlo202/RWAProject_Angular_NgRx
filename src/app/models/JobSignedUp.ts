export interface IJobSignedUp {
    id:number;
    jobId:number;
    workerId:number;
}

export class JobSignedUp implements IJobSignedUp{
    id:number;
    jobId:number;
    workerId:number;

    constructor(jobId, workerId) {
        this.jobId = jobId;
        this.workerId = workerId;
    }
  
}