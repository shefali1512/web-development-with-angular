import { Component, Input } from '@angular/core';
import { User } from '../../left-pannel/user-model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({required:true}) user !: User;


}
