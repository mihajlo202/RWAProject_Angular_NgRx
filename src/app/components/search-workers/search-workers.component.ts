import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Worker } from 'src/app/models/Worker';
import { AppState } from 'src/app/store';
import { RemoveSpecificWorker } from 'src/app/store/actions/worker.actions';
import { selectAllUsers } from 'src/app/store/selectors/worker.selectors';

@Component({
  selector: 'app-search-workers',
  templateUrl: './search-workers.component.html',
  styleUrls: ['./search-workers.component.css']
})
export class SearchWorkersComponent implements OnInit {
  usersArray: Worker[]=[];
  filteredUsers: Worker[]=[];
  showModal: boolean=false;
  specificUser: Worker = {
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
    this.filteredUsers= this.inputFilter ? this.filter(this.inputFilter) : this.usersArray;
  }

  users$=this.store.pipe(
    select(selectAllUsers),
    filter(val => val !== undefined)
  )
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.showModal=false;
    
    this.users$.subscribe( users => {
      users.forEach(u =>  {
        this.usersArray.push(u)
        this.filteredUsers.push(u);
      }
    )})
  }

  filter(filterBy: string): Worker[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.usersArray.filter( (user: Worker)=>
      user.name.toLocaleLowerCase().indexOf(filterBy)!==-1 || 
      user.surname.toLocaleLowerCase().indexOf(filterBy)!==-1 ||
      user.type.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

  detailsClicked(user: Worker){
    this.showModal=true;
    this.specificUser=user;
  }

  cancelModal(){
    this.showModal=false;
  }

  removeUser(user: Worker){
    this.usersArray=[];
    this.filteredUsers=[];
    this.specificUser=user;
    this.store.dispatch(RemoveSpecificWorker({worker: this.specificUser}));
  }
}