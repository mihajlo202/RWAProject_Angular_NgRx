import { Action, createAction, props } from '@ngrx/store';
import { LoggedUser } from '../../models/LoggedUser';

export enum AuthActionTypes {
    LoginAction = '[Login] Action',
    LogoutAction =  '[Logout] Action'
}

export const LogIn = createAction(
    AuthActionTypes.LoginAction,
    props<{ user: LoggedUser }>()
)

export const LogOut = createAction(
    AuthActionTypes.LogoutAction
)