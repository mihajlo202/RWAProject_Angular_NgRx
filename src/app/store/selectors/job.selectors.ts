import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as FromJobs from "../reducers/job.reducers"

export const selectJobsState = createFeatureSelector<FromJobs.JobState>(
    'jobs'
  );
  
  export const selectAllEvents = createSelector(
    selectJobsState,
    FromJobs.selectAll
  );