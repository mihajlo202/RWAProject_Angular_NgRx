import { Action, createReducer, createSelector, on } from '@ngrx/store';
import * as EmployerActions from '../actions/employer.actions';
import { Employer } from 'src/app/models/Employer';


export const employerFeatureKey = 'employer';

export interface EmployerState {
  employer: Employer
}

export const initialState: EmployerState = {
  employer: undefined
};

const reducer = createReducer(
  initialState,
  on(EmployerActions.GetEmployerInfo, (state, {employer}) => ({employer : employer})),
  on(EmployerActions.DeleteEmployerInfo, (state) => ({employer: undefined}))
)

export function employerReducer(state: EmployerState | undefined, action: Action) {
  return reducer(state, action);
}
