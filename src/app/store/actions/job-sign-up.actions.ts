import { Action, createAction, props } from "@ngrx/store";
import { JobSignedUp } from "src/app/models/JobSignedUp";

export enum JobsSignedUpActionTypes {
    LOAD_JOBS_SIGNED_UP = '[JobSignedUp] Load JobsSignedUp',
    LOAD_JOBS_SIGNED_UP_SUCCESS = '[JobSignedUp] Load JobsSignedUp Success',
    LOAD_JOBS_SIGNED_UP_FOR_USER = '[JobSignedUp] Load JobsSignedUp For User',
    LOAD_JOBS_SIGNED_UP_FOR_USER_SUCCESS = '[JobSignedUp] Load JobsSignedUp For User Success',
    DELETE_ALL_JOBS_SIGNED_UP='[JobSignedUp] Delete All JobsSignedUp',
    ADD_JOB_SIGNED_UP='[JobSignedUp] Add JobSignedUp',
    ADD_JOB_SIGNED_UP_SUCCESS='[JobSignedUp] Add JobSignedUp Success',
    DELETE_ONE_JOB_SIGNED_UP='[JobSignedUp] Delete One JobSignedUp',
  }

  export const LoadJobsSignedUp = createAction(
    JobsSignedUpActionTypes.LOAD_JOBS_SIGNED_UP
  )
  

  export const LoadJobsSignedUpSuccess = createAction(
    JobsSignedUpActionTypes.LOAD_JOBS_SIGNED_UP_SUCCESS,
    props<{jobsSignedUp: JobSignedUp[]}>()
  )

  export const LoadJobsSignedUpForUser = createAction(
    JobsSignedUpActionTypes.LOAD_JOBS_SIGNED_UP_FOR_USER,
    props<{idUser:number}>()
  )

  export const LoadJobsSignedUpForUserSuccess = createAction(
    JobsSignedUpActionTypes.LOAD_JOBS_SIGNED_UP_FOR_USER_SUCCESS,
    props<{jobsSignedUp: JobSignedUp[]}>()
  )

  export const DeleteAllJobsSignedUp = createAction(
    JobsSignedUpActionTypes.DELETE_ALL_JOBS_SIGNED_UP
  )

  export const AddJobSignedUp = createAction(
    JobsSignedUpActionTypes.ADD_JOB_SIGNED_UP,
    props<{jobSignedUp: JobSignedUp}>()
  )

  export const AddJobSignedUpSuccess = createAction(
    JobsSignedUpActionTypes.ADD_JOB_SIGNED_UP_SUCCESS,
    props<{jobSignedUp: JobSignedUp}>()
  )

  export const DeleteOneJobSignedUp = createAction(
    JobsSignedUpActionTypes.DELETE_ONE_JOB_SIGNED_UP,
    props<{idObject: number }>()
  )