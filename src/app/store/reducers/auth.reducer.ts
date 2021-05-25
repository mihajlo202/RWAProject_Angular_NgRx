import { Action, createReducer, on } from "@ngrx/store";
import { LoggedUser } from "src/app/models/LoggedUser";
import * as AuthActions from "../actions/auth.actions";

export const authFeatureKey = 'auth'

export interface AuthState {
    loggedIn: boolean,
    user: LoggedUser
}

export const initialState: AuthState = {
    loggedIn: false,
    user: undefined
}

const reducer = createReducer(
    initialState,
    on(AuthActions.LogIn, (state, {user}) => ({loggedIn: true, user: user})),
    on(AuthActions.LogOut, (state) => ({loggedIn: false, user: undefined}))
)

export function authReducer(state: AuthState | undefined, action: Action) {
    return reducer(state, action);
}