import { CustomTaskActionModel } from './task-action.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() taskDataEmitter = new EventEmitter<CustomTaskActionModel>();


   updateStatus(status:string){
     this.taskDataEmitter.emit({task:this.task,action:status});
   }


}
