import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Job } from 'src/app/models/Job';
import { AppState } from 'src/app/store';
import { NewJob, UpdateJob } from 'src/app/store/actions/job.actions';
import { selectEmployerId } from 'src/app/store/selectors/employer.selectors';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
  job: Job = {
    id: undefined,
    name: '',
    description: '',
    type: '',
    userCount: null,
    employerId: null
  };

  employerId$=this.store.select(selectEmployerId);

  @Output() cancelClicked: EventEmitter<any> =
  new EventEmitter();
  @Input() isUpdating: boolean;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select( state => state.jobToUpdate.job)
    .subscribe(event => this.job={...event});
  }
  
  cancelModal(): void {
    this.cancelClicked.emit(null);
  }

  handleClick(): void {
    if(this.isUpdating){
      this.store.dispatch(UpdateJob({job: this.job}))
    }
    else
    {
      this.employerId$.subscribe(id =>{
          this.job.employerId=id;
          this.store.dispatch(NewJob({job: this.job}))
        })
    }
    this.cancelModal();
  }
 
}

