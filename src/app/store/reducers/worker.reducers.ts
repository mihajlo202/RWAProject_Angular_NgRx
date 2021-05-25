import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { Worker } from "src/app/models/Worker";
import * as WorkerActions from "../actions/worker.actions";

export const workerFeatureKey = 'Workers';

export interface WorkerState extends EntityState<Worker> {}

export const userAdapter : EntityAdapter<Worker> = createEntityAdapter<Worker>();

export const initialState: WorkerState= userAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(WorkerActions.LoadAllWorkersSucces, (state, {workers}) => {
    return userAdapter.addMany(workers, state);
  }),
  on(WorkerActions.RemoveSpecificWorker, (state, {worker}) => {
    return userAdapter.removeOne(worker.id, state)
  }),
  on(WorkerActions.DeleteAllWorkers, (state) => {
    return userAdapter.removeAll(state)
  }),
);

export function workerReducer(state: WorkerState | undefined, action: Action) {
  return reducer(state, action);
}


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = userAdapter.getSelectors();