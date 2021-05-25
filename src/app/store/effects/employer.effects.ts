import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions, Effect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { EmployerService } from "src/app/services/employer.service";
import { AppState } from "..";
import * as EmployerActions from "../actions/employer.actions";

@Injectable()
export class EmployerEffects {
  getUserById=createEffect(() => this.actions$.pipe(
    ofType(EmployerActions.NeedEmployerInfo),
    map((action)=>action.email),
        mergeMap((email)=>this.employerService.getEmployerByEmail(email)
        .pipe(
            map((user)=>EmployerActions.GetEmployerInfo({employer: user[0]})))
        )
    ))
  
    constructor(private actions$: Actions,
                private store: Store<AppState>,
                private employerService: EmployerService) { }

}