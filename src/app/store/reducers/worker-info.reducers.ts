import * as WorkerInfoActions from '../actions/worker-info.actions';
import { Worker } from '../../models/Worker'
import { Action, createReducer, on } from '@ngrx/store';
export const userInfoFeatureKey = 'userInfo';

export interface UserInfoState {
  userInfo: Worker
}

export const initialState: UserInfoState = {
  userInfo: undefined
};

const reducer = createReducer(
  initialState,
  on(WorkerInfoActions.GetUserInfoAction, (state, {worker}) => ({userInfo: worker})),
  on(WorkerInfoActions.DeleteUserInfoAction, (state) => ({userInfo: undefined})),
  on(WorkerInfoActions.UpdateUserInfoAction, (state, {worker}) => ({userInfo: worker}))
)

export function userInfoReducer(state: UserInfoState | undefined, action: Action) {
  return reducer(state, action);
}

