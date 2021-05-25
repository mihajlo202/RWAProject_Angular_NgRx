import { Injectable } from "@angular/core";
import { createEffect, ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { Worker } from "src/app/models/Worker";
import { EmployerService } from "src/app/services/employer.service";
import { AppState } from "..";
import * as WorkerActions from "../actions/worker.actions";

@Injectable()
export class WorkerEffects {

    getAllUsers=createEffect(() => this.actions$.pipe(
        ofType(WorkerActions.LoadAllWorkers),
        mergeMap(()=>this.employerService.getAllUsers()
        .pipe(
        map((workers: Worker[])=> WorkerActions.LoadAllWorkersSucces({workers:workers})))
        )
    ))
    
    constructor(private actions$: Actions,
                private store: Store<AppState>,
                private employerService : EmployerService) { }
}