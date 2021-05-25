import { Action, createAction, props } from "@ngrx/store";
import { Worker } from "src/app/models/Worker";

export enum WorkerActionTypes {
    LOAD_ALL_WORKERS = '[User] Load All Workers',
    LOAD_ALL_WORKERS_SUCCESS = '[User] Load All Workers Success',
    REMOVE_SPECIFIC_WORKER='[User] Remove Spec Worker',
    DELETE_ALL_WORKERS = '[User] Delete All Workers'
  }

  export const LoadAllWorkers = createAction(
    WorkerActionTypes.LOAD_ALL_WORKERS
  )

  export const LoadAllWorkersSucces = createAction(
    WorkerActionTypes.LOAD_ALL_WORKERS_SUCCESS,
    props<{workers: Worker[]}>()
  )

  export const RemoveSpecificWorker = createAction(
    WorkerActionTypes.REMOVE_SPECIFIC_WORKER,
    props<{worker: Worker}>()
  )

  export const DeleteAllWorkers = createAction(
    WorkerActionTypes.DELETE_ALL_WORKERS
  )