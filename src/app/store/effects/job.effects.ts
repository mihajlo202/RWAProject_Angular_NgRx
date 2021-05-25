import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { noop } from "rxjs";
import { map, mergeMap, tap } from "rxjs/operators";
import { EmployerService } from "src/app/services/employer.service";
import { WorkerService } from "src/app/services/worker.service";
import * as JobToUpdateActions from "../actions/job-update.actions";
import * as JobActions from "../actions/job.actions";

@Injectable()
export class EventEffects {

    getAllJobs=createEffect(()=> this.actions$.pipe(
        ofType(JobActions.LoadAllJobs),
        mergeMap(()=>this.workerService.getAllJobs().pipe(
        map((events)=> JobActions.LoadAllJobsSuccess({jobs:events})))
    )))

    getEmployerJobs=createEffect(() => this.actions$.pipe(
        ofType( JobActions.LoadEmployersJobs),
        map((action) => action.employerId),
        mergeMap((employerId)=>this.employerService.getEventsByEmployerId(employerId)
            .pipe(
                map((events)=>JobActions.LoadEmployersJobsSuccess({jobs:events})
            ))
        )
    ))

    addNewJob=createEffect(() => this.actions$.pipe(
        ofType( JobActions.NewJob),
        map((action) => action.job),
            mergeMap((event)=>this.employerService.postEvent(event)
            .pipe(
            map((event)=> JobActions.NewJobSuccess({job:event})))
        )
    ))

    updateJob= createEffect(() => this.actions$.pipe(
        ofType( JobActions.UpdateJob),
        mergeMap((job)=>this.employerService.updateJob(job.job.id, job.job)
        .pipe(
        map((event)=> JobToUpdateActions.DeleteJobToUpdate()))
    )))

    deleteOneEvent = createEffect(() => this.actions$.pipe(
        ofType(JobActions.DeleteJob),
        tap(action => this.employerService.deleteJob(action.job.id)
        .subscribe(
            noop,
            err => alert("Doslo je do greske pri brisanju posla iz baze!")
        ))), {dispatch:false});


    constructor(private actions$: Actions,
                private employerService : EmployerService,
                private workerService: WorkerService
                ) { }

}