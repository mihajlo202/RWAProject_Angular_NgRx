import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { authReducer, AuthState } from "./reducers/auth.reducer";
import { employerReducer, EmployerState } from "./reducers/employer.reducer";
import { jobsSignedUpReducer, JobsSignedUpState } from "./reducers/job-signed-up.reducer";
import { jobToUpdateReducer, JobToUpdateState } from "./reducers/job-update.reducers";
import { jobReducer, JobState } from "./reducers/job.reducers";
import { userInfoReducer, UserInfoState } from "./reducers/worker-info.reducers";
import { workerReducer, WorkerState } from "./reducers/worker.reducers";


export interface AppState {
    auth: AuthState,
    employer: EmployerState,
    userInfo: UserInfoState,
    jobs: JobState,
    jobToUpdate: JobToUpdateState,
    worker: WorkerState,
    jobsSignedUp: JobsSignedUpState
}

export const reducers : ActionReducerMap<AppState> = {
    auth: authReducer,
    employer: employerReducer,
    userInfo: userInfoReducer,
    jobs: jobReducer,
    jobToUpdate: jobToUpdateReducer,
    worker: workerReducer,
    jobsSignedUp: jobsSignedUpReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
