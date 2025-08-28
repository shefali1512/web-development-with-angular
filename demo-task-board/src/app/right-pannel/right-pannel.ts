import { NewTask } from './new-task/new-task';
import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { User } from '../left-pannel/user-model';

@Component({
  selector: 'app-right-pannel',
  imports: [Task, NewTask],
  templateUrl: './right-pannel.html',
  styleUrl: './right-pannel.css'
})
export class RightPannel {

  @Input({required:true}) user !: User;


}
