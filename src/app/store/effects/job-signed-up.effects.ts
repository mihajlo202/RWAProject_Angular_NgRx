import { Injectable } from "@angular/core";
import {Actions, ofType, createEffect, Effect} from '@ngrx/effects';
import { WorkerService } from 'src/app/services/worker.service';
import { map, mergeMap, tap } from 'rxjs/operators';
import * as JobSignUpService from '../actions/job-sign-up.actions';
import { noop } from 'rxjs';

@Injectable()
export class JobsSignedUpEffects {

    getAllJobsSignedUp=createEffect(()=> this.actions$.pipe(
        ofType(JobSignUpService.LoadJobsSignedUp),
        mergeMap(()=>this.workerService.getAllJobSigned().pipe(
        map((events) => JobSignUpService.LoadJobsSignedUpSuccess({jobsSignedUp: events})))
    )))

    getAllJobsSignedUpForUser=createEffect(()=> this.actions$.pipe(
        ofType(JobSignUpService.LoadJobsSignedUpForUser),
        map(action => action.idUser),
        mergeMap((idUser)=>this.workerService.getAllJobSignedForWorker(idUser).pipe(
        map((events)=>JobSignUpService.LoadJobsSignedUpForUserSuccess({jobsSignedUp:events})))
    )))

    addJobsSignedUp=createEffect(()=> this.actions$.pipe(
        ofType(JobSignUpService.AddJobSignedUp),
        map(action => action.jobSignedUp),
            mergeMap((event)=>this.workerService.postJobSigned(event).pipe(
            map((events)=>JobSignUpService.AddJobSignedUpSuccess({jobSignedUp: events})))
    )))

    @Effect({dispatch:false})
    deleteOneEvent = this.actions$.pipe(
        ofType(JobSignUpService.DeleteOneJobSignedUp),
        tap(action => this.workerService.deletJobSigned(action.idObject)
        .subscribe(
            noop,
            err => alert("Doslo je do greske pri brisanju posla iz baze!")
        ))
    );

    constructor(private actions$: Actions,
        private workerService: WorkerService) { }
}