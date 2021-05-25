import { Action, createAction, props } from '@ngrx/store';
import { Employer } from '../../models/Employer'

export enum EmployerActionTypes {
    NEED_INFO_ACTION = '[Employer Profile Page] Requesting User Info',
    GET_INFO_ACTION ='[Employer Profile Page] Getting User Info',
    DELETE_INFO_ACTION ='[Employer Logged Out]'
}


export const NeedEmployerInfo = createAction(
    EmployerActionTypes.NEED_INFO_ACTION,
    props<{email:string}>()
)

export const GetEmployerInfo = createAction(
    EmployerActionTypes.GET_INFO_ACTION,
    props<{employer:Employer }>()
)

export const DeleteEmployerInfo = createAction(
    EmployerActionTypes.DELETE_INFO_ACTION
)