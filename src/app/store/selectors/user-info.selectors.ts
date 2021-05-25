import { createSelector } from '@ngrx/store';
import { Worker } from 'src/app/models/Worker';

export const selectUserInfoState = state => state.userInfo;

export const selectUserInfo = createSelector(
    selectUserInfoState,
    userInfo=> userInfo.userInfo
  );

export const selectUserId= createSelector(
  selectUserInfo,
  (userInfo : Worker )=> userInfo.id
)