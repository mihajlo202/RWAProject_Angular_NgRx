import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Worker } from '../../models/Worker';
import { filter } from 'rxjs/operators';
import { WorkerService } from 'src/app/services/worker.service';
import { AppState } from 'src/app/store';
import { selectAllEventsSigned } from 'src/app/store/selectors/job-signed-up.selectors';
import { selectAllEvents } from 'src/app/store/selectors/job.selectors';
import { selectUserInfo } from 'src/app/store/selectors/user-info.selectors';
import { Job } from 'src/app/models/Job';
import { JobEmployed } from 'src/app/models/JobEmployed';
import { AddJobSignedUp } from 'src/app/store/actions/job-sign-up.actions';
import { UpdateUserInfoAction } from 'src/app/store/actions/worker-info.actions';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.css']
})
export class SearchJobsComponent implements OnInit {
  notSignedEvents: Job[]=[];
  idsSignedEvents: number[]=[];
  
  allEvents: Job[]=[];
  filteredEvents: Job[]=[];
  user: Worker = {
    id: undefined,
    name: '',
    surname: '',
    email: '',
    type: '',
    status: ''
  };

  _inputFilter: string;
  get inputFilter(){
    return this._inputFilter;
  }
  set inputFilter(value:string){
    this._inputFilter=value;
    this.filteredEvents= this.inputFilter ? this.filter(this.inputFilter) : this.allEvents;
  }

  userInfo$=this.store.pipe(
    select(selectUserInfo),
    filter(val => val !== undefined)
  );

  events$=this.store.pipe(
    select(selectAllEvents),
    filter(val => val !== undefined)
  )

  eventsSignedUp$=this.store.pipe(
    select(selectAllEventsSigned),
    filter(val => val !== undefined)
  );

  constructor(private store: Store<AppState>, private userService: WorkerService) { }

  ngOnInit(): void {

    this.events$.subscribe(
      (events) => events.forEach(u => { this.allEvents.push(u); }))
    this.filteredEvents=this.allEvents;
    this.userInfo$.subscribe((user: Worker) => this.user={...user} );

    this.eventsSignedUp$.subscribe((events) =>{
      events.forEach(eventSigned => this.idsSignedEvents.push(eventSigned.jobId))
    
   
    if(this.idsSignedEvents.length!=0){
      this.allEvents.forEach((event, indexOf )=>{
        this.idsSignedEvents.forEach(idEvent =>{
          if(event.id===idEvent)
            this.allEvents.splice(indexOf,1);
        })
      })
    }

    })
  }

  filter(filterBy: string): Job[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.allEvents.filter( (korisnik: Job)=>
        korisnik.type.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

  signToEvent(event: Job){
    this.idsSignedEvents=[]; 

    if(event.type===this.user.type){
      let eventSigned= new JobEmployed(event.id, this.user.id);
      this.store.dispatch(AddJobSignedUp({jobSignedUp: eventSigned}));
      if(this.user.status!="u procesu"){
        this.user.status="u procesu"
        this.store.dispatch(UpdateUserInfoAction({worker: this.user}));
      }
    }
    else alert('Ne možete se prijaviti na dati događaj jer ovaj događaj zahteva drugu vrstu korisnika. Žao nam je!')
  }

}