import { createSelector } from "@ngrx/store";
import { LoggedUser } from "src/app/models/LoggedUser";


export const selectAuthState = state => state.auth;

export const isLoggedIn = createSelector(
    selectAuthState,
    auth => auth.loggedIn
);

export const selectedLoggedUser = createSelector(
    selectAuthState,
    auth => <LoggedUser>auth.user
)

export const selectUserId= createSelector(
    selectedLoggedUser,
    user => user.id
)