import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Worker } from 'src/app/models/Worker';
import { AppState } from 'src/app/store';
import { LoadJobsSignedUpForUser } from 'src/app/store/actions/job-sign-up.actions';
import { LoadAllJobs } from 'src/app/store/actions/job.actions';
import { NeedUserInfo } from 'src/app/store/actions/worker-info.actions';
import { selectedLoggedUser } from 'src/app/store/selectors/auth.selectors';
import { selectUserInfo } from 'src/app/store/selectors/user-info.selectors';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
  loggedUser$=this.store.pipe(
    select(selectedLoggedUser),
    filter(val => val !== undefined)
  );

  user$=this.store.pipe(
    select(selectUserInfo),
    filter(val=> val!=undefined)
  )

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loggedUser$.subscribe(
      user => this.store.dispatch(NeedUserInfo({email: user.email}))
    )

    this.user$.subscribe( (userInfo: Worker) => {
      this.store.dispatch(LoadJobsSignedUpForUser({idUser: userInfo.id}));
    })
    this.store.dispatch(LoadAllJobs());
  }

}