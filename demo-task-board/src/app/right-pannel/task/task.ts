import { Component, Input } from '@angular/core';
import { User } from '../../left-pannel/user-model';
import { TaskModel } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required:true}) user !: User;
  @Input({required:true}) task !: TaskModel;





}
