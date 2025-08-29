import { NewTask } from './new-task/new-task';
import { Component, Input, ViewChild } from '@angular/core';
import { Task } from './task/task';
import { User } from '../left-pannel/user-model';
import { TaskModel } from './task/task.model';
import { CustomTaskActionModel } from './task/task-action.model';

@Component({
  selector: 'app-right-pannel',
  imports: [Task, NewTask],
  templateUrl: './right-pannel.html',
  styleUrl: './right-pannel.css'
})
export class RightPannel {
  @Input({required:true}) user !: User;
  selecedTaskStatus : string = "A";

  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
      status: 'A'
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
      status: 'C'
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
      status: 'A'
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
      status: 'C'
    },
    {
      id: 't5',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
      status: 'C'
    },
    {
      id: 't6',
      userId: 'u4',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
      status: 'C'
    },
  ];

  public filteredTasks = this.tasks;

  get showTasksByStatusAndUserId() {
    return this.tasks.filter((task)=> task.userId === this.user.id && task.status === this.selecedTaskStatus);
  }

  markTaskAsComplete(taskData: CustomTaskActionModel) {
    if(taskData.action == 'C'){
      this.tasks.map((task) => {
        if (task.id === taskData.task.id) {
          task.status = 'C';
        }
      });
    }else if(taskData.action == 'D'){
      this.tasks.map((task) => {
        if (task.id === taskData.task.id) {
          task.status = 'D';
        }
      });
    }

  }

  addNewTask(taskData: TaskModel) {
    console.log("new" ,  taskData)
    this.tasks.push(taskData);
  }

}
