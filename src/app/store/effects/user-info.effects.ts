import { Injectable } from "@angular/core";
import {Actions, ofType, createEffect, Effect} from '@ngrx/effects';
import { WorkerService } from '../../services/worker.service'
import {  mergeMap, map } from 'rxjs/operators';
import * as WorkerInfoActions from '../actions/worker-info.actions'
import { Worker } from 'src/app/models/Worker';

@Injectable()
export class UserInfoEffects {


  getUserById=createEffect(() => this.actions$.pipe(
    ofType( WorkerInfoActions.NeedUserInfo),
    map((action)=>action.email),
        mergeMap((email)=>this.workerService.getWorkerByEmail(email).pipe(
            map((user : Worker)=> WorkerInfoActions.GetUserInfoAction({worker: user})))
        )
    ))

    updateUser$= createEffect(() =>this.actions$.pipe(
        ofType( WorkerInfoActions.UpdateUserInfoAction),
        map((action) => action.worker),
        mergeMap((user)=>this.workerService.updateWorker(user.id, user)
    )), {dispatch:false});
  
    constructor(private actions$: Actions,
                private workerService: WorkerService) { }

}