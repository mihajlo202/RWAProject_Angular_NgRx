import { Action, createAction, props } from "@ngrx/store";
import { Job } from "src/app/models/Job";

export enum JobActionTypes {
    LOAD_ALL_JOBS = '[Job] LOAD_ALL_JOBS',
    LOAD_ALL_JOBS_SUCCESS = '[Job] LOAD_ALL_JOBS_SUCCESS',
    LOAD_EMPLOYERS_JOBS = '[Job] LOAD_EMPLOYERS_JOBS',
    LOAD_EMPLOYERS_JOBS_SUCCESS = '[Job] LOAD_EMPLOYERS_JOBS_SUCCESS',
    NEW_JOB = '[Job] NEW_JOB',
    NEW_JOB_SUCCESS = '[Job] NEW_JOB_SUCCESS',
    UPDATE_JOB = '[Job] UPDATE_JOB',
    DELETE_JOB = '[Job] DELETE_JOB',
    DELETE_ALL_JOBS ='[Job] DELETE_ALL_JOBS',
  }
  
  export const LoadAllJobs = createAction(
    JobActionTypes.LOAD_ALL_JOBS
  )

  export const LoadAllJobsSuccess = createAction(
    JobActionTypes.LOAD_ALL_JOBS_SUCCESS,
    props<{jobs:Job[]}>()
  )

  export const LoadEmployersJobs = createAction(
    JobActionTypes.LOAD_EMPLOYERS_JOBS,
    props<{employerId:number}>()
  )

  export const LoadEmployersJobsSuccess = createAction(
    JobActionTypes.LOAD_EMPLOYERS_JOBS_SUCCESS,
    props<{jobs:Job[]}>()
  )

  export const NewJob = createAction(
    JobActionTypes.NEW_JOB,
    props<{job:Job}>()
  )

  export const NewJobSuccess = createAction(
    JobActionTypes.NEW_JOB_SUCCESS,
    props<{job:Job}>()
  )

  export const UpdateJob = createAction(
    JobActionTypes.UPDATE_JOB,
    props<{job:Job}>()
  )

  export const DeleteJob = createAction(
    JobActionTypes.DELETE_JOB,
    props<{ job:Job }>()
  )

  export const DeleteAllJobs = createAction(
    JobActionTypes.DELETE_ALL_JOBS
  )