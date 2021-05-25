
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { JobSignedUp } from 'src/app/models/JobSignedUp';
import * as JobSignedUpActions from '../actions/job-sign-up.actions';


export const eventsSignedUpFeatureKey = 'JobSignedUp';

export interface JobsSignedUpState extends EntityState<JobSignedUp> {}

export const adapter : EntityAdapter<JobSignedUp> = createEntityAdapter<JobSignedUp>();

export const initialState: JobsSignedUpState= adapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(JobSignedUpActions.LoadJobsSignedUpSuccess, (state, {jobsSignedUp}) => {
    return adapter.addMany( jobsSignedUp, state )
  }),
  on(JobSignedUpActions.LoadJobsSignedUpForUserSuccess, (state, {jobsSignedUp}) => {
    return adapter.addMany( jobsSignedUp, state )
  }),
  on(JobSignedUpActions.DeleteAllJobsSignedUp, (state) => {
    return adapter.removeAll(state)
  }),
  on(JobSignedUpActions.AddJobSignedUpSuccess, (state, {jobSignedUp}) => {
    return adapter.addOne( jobSignedUp , state);
  }),
  on(JobSignedUpActions.DeleteOneJobSignedUp, (state, {idObject}) => {
    return adapter.removeOne(idObject , state);
  })
)

export function jobsSignedUpReducer(state: JobsSignedUpState | undefined, action: Action) {
  return reducer(state, action);
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = adapter.getSelectors();