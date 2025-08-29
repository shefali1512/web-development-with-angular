import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../left-pannel/user-model';
import { FormsModule } from '@angular/forms';
import { TaskModel } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({ required: true }) user !: User;
  @Output() emitNewTaskDetails = new EventEmitter<TaskModel>();
  task : TaskModel = { id: "string",
  userId: "string",
  title: "string",
  summary: "string",
  dueDate: "string",
  status:"string"};
  taskId: string = '';
  taskTitle: string = '';
  dueDate: string = '';
  taskSummary: string = '';

  addNewTask(){
    this.task.id = this.taskId;
    this.task.dueDate = this.dueDate;
    this.task.userId = this.user.id;
    this.task.summary = this.taskSummary;
    this.task.title = this.taskTitle;
    this.task.status = 'N';
    console.log(this.task);
    this.emitNewTaskDetails.emit(this.task);
  }
}
