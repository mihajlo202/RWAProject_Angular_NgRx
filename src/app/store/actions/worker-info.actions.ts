import { Action, createAction, props, UPDATE } from '@ngrx/store';
import { Worker } from '../../models/Worker';

export enum UserInfoActionTypes {
    NEED_USER_INFO_ACTION = '[User Profile Page] Load User Info',
    GET_USER_INFO_ACTION ='[User Profile Page] Getting User Info',
    UPDATE_USER_INFO_ACTION='[User Profile Page] Update User Info',
    DELETE_USER_INFO_ACTION ='[User Logged Out]'
  }

  export const NeedUserInfo = createAction(
    UserInfoActionTypes.NEED_USER_INFO_ACTION,
    props<{email:string}>()
  )
  
  export const GetUserInfoAction = createAction(
    UserInfoActionTypes.GET_USER_INFO_ACTION,
    props<{worker:Worker}>()
  )

  export const UpdateUserInfoAction = createAction(
    UserInfoActionTypes.UPDATE_USER_INFO_ACTION,
    props<{worker:Worker}>()
  )

  export const DeleteUserInfoAction = createAction(
    UserInfoActionTypes.DELETE_USER_INFO_ACTION
  )