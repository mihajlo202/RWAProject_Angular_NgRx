import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Employer } from 'src/app/models/Employer';
import { AppState } from 'src/app/store';
import { NeedEmployerInfo } from 'src/app/store/actions/employer.actions';
import { LoadJobsSignedUp } from 'src/app/store/actions/job-sign-up.actions';
import { LoadEmployersJobs } from 'src/app/store/actions/job.actions';
import { LoadAllWorkers } from 'src/app/store/actions/worker.actions';
import { selectedLoggedUser } from 'src/app/store/selectors/auth.selectors';
import { selectEmployerInfo } from 'src/app/store/selectors/employer.selectors';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  user$=this.store.pipe(
    select(selectedLoggedUser),
    filter(val => val !== undefined)
  );

  employer$=this.store.pipe(
    select(selectEmployerInfo),
    filter(val => val !== undefined)
  );
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.user$.subscribe(
      user => this.store.dispatch(NeedEmployerInfo({email: user.email}))
    )
    this.employer$.subscribe( (employer) =>{
      this.store.dispatch(LoadEmployersJobs({employerId:employer.id}))
    })
    this.store.dispatch(LoadAllWorkers());
    this.store.dispatch(LoadJobsSignedUp());
  }

}
