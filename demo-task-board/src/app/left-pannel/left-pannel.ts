import { Component, EventEmitter, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user-model';

@Component({
  selector: 'app-left-pannel',
  imports: [],
  templateUrl: './left-pannel.html',
  styleUrl: './left-pannel.css'
})
export class LeftPannel {
  users = DUMMY_USERS;
   @Output() userDataEmitter = new EventEmitter<User>();

  onSelect(user:User){
     this.userDataEmitter.emit(user);
  }




}
