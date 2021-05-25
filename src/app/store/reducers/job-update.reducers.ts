import { Action, createReducer, on } from "@ngrx/store";
import { Job } from "src/app/models/Job";
import * as JobToUpdateActions from "../actions/job-update.actions";

  
  export interface JobToUpdateState {
    job: Job;
  }
  
  export const initialState: JobToUpdateState = {
    job: undefined
  }

  const reducer = createReducer(
    initialState,
    on(JobToUpdateActions.JobToUpdate, (state, {job}) => ({job: job})),
    on(JobToUpdateActions.DeleteJobToUpdate, (state) => ({job: undefined}))
)
  
export function jobToUpdateReducer(state: JobToUpdateState | undefined, action: Action) {
    return reducer(state, action);
}
  