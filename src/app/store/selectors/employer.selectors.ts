import { createSelector } from '@ngrx/store';

export const selectEmployerState = state => state.employer;

export const selectEmployerInfo = createSelector(
  selectEmployerState,
  employer => employer.employer
);

export const selectEmployerId= createSelector(
  selectEmployerInfo,
  employer=> employer.id
);
