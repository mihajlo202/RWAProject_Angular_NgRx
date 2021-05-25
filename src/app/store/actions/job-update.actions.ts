import { Action, createAction, props } from '@ngrx/store';
import { Job } from 'src/app/models/Job';

export enum JobToUpdateTypes {
  SET_JOB_TO_UPDATE = '[Job] Set job to update',
  DELETE_JOB_TO_UPDATE ='[Job] Delete job to update'
}

export const JobToUpdate = createAction(
  JobToUpdateTypes.SET_JOB_TO_UPDATE,
  props<{job:Job}>()
)

export const DeleteJobToUpdate = createAction(
  JobToUpdateTypes.DELETE_JOB_TO_UPDATE
)