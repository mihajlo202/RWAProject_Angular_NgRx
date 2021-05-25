import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Job } from 'src/app/models/Job';
import { JobEmployed } from 'src/app/models/JobEmployed';
import { Worker } from 'src/app/models/Worker';
import { AppState } from 'src/app/store';
import { DeleteOneJobSignedUp } from 'src/app/store/actions/job-sign-up.actions';
import { UpdateUserInfoAction } from 'src/app/store/actions/worker-info.actions';
import { selectAllEventsSigned } from 'src/app/store/selectors/job-signed-up.selectors';
import { selectAllEvents } from 'src/app/store/selectors/job.selectors';
import { selectUserInfo } from 'src/app/store/selectors/user-info.selectors';

@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrls: ['./worker-profile.component.css']
})
export class WorkerProfileComponent implements OnInit {
  allEvents: Job[]=[];
  signedEvents: Job[]=[];
  objectsSignedEvents: JobEmployed[]=[];
  user: Worker = {
    id: undefined,
    name: '',
    surname: '',
    email: '',
    type: '',
    status: ''
  };

  userInfo$=this.store.pipe(
    select(selectUserInfo),
    filter(val => val!=undefined)
  )

  events$=this.store.pipe(
    select(selectAllEvents),
    filter(val => val !== undefined)
  )

  eventsSignedUp$=this.store.pipe(
    select(selectAllEventsSigned),
    filter(val => val !== undefined)
  );

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.userInfo$.subscribe((user: Worker) => this.user={...user} );
    this.events$.subscribe(
      (events) => events.forEach(evnet =>  this.allEvents.push(evnet))
    )
    this.objectsSignedEvents=[];
    this.signedEvents=[];
    
    this.eventsSignedUp$.subscribe((events) =>{
      events.forEach(eventSigned => this.objectsSignedEvents.push(eventSigned))
    
      if(this.objectsSignedEvents.length!=0){
        this.allEvents.forEach(event=>{
          this.objectsSignedEvents.forEach(object => {
            if(event.id===object.jobId)
              this.signedEvents.push(event);
          })
      })}
      else {
        if(this.user.status!="slobodan"){
          this.user.status="slobodan";
          if(this.user.id!=undefined)
            this.store.dispatch(UpdateUserInfoAction({worker: this.user}));
        }
      }
    })

  }

  signOutOfEvent(event: Job){
    let idToDelete: number;
    this.objectsSignedEvents.forEach(signedEvent=>{
      if(signedEvent.jobId===event.id && signedEvent.workerId===this.user.id){
        idToDelete=signedEvent.id
      }
    })

    this.objectsSignedEvents=[];
    this.signedEvents=[];
    this.store.dispatch(DeleteOneJobSignedUp({idObject: idToDelete}));
  }
  
}
