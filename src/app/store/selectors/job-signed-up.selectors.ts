import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as FromEvents from '../reducers/job-signed-up.reducer';

export const selectEventsSignedUpState = createFeatureSelector<FromEvents.JobsSignedUpState>(
  'jobsSignedUp'
);

export const selectAllEventsSigned = createSelector(
    selectEventsSignedUpState,
    FromEvents.selectAll
);

