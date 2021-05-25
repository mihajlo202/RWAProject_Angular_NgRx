import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { Job } from "src/app/models/Job";
import * as JobActions from "../actions/job.actions";

export interface JobState extends EntityState<Job> {}

export const adapter : EntityAdapter<Job> = createEntityAdapter<Job>();

export const initialState: JobState= adapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(JobActions.LoadAllJobsSuccess, (state, {jobs}) => {
    return adapter.addMany( jobs, state )
  }),
  on(JobActions.LoadEmployersJobsSuccess, (state, {jobs}) => {
    return adapter.addMany( jobs, state )
  }),
  on(JobActions.NewJobSuccess, (state, {job}) => {
    return adapter.addOne(job, state);
  }),
  on(JobActions.DeleteJob, (state, {job}) => {
    return adapter.removeOne(job.id, state);
  }),
  on(JobActions.DeleteAllJobs, (state) => {
    return adapter.removeAll(state);
  }),
  on(JobActions.UpdateJob, (state, {job}) => {
    return adapter.updateOne({ id: job.id, changes: job }, state);
  }),
)

export function jobReducer(state: JobState | undefined, action: Action) {
  return reducer(state, action);
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = adapter.getSelectors();