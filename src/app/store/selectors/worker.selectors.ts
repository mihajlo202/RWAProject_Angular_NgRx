import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as FromWorkers from '../reducers/worker.reducers';

export const selectUserState = createFeatureSelector<FromWorkers.WorkerState>(
    'worker'
  );
  
  export const selectAllUsers = createSelector(
    selectUserState,
    FromWorkers.selectAll
  );