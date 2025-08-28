import { Component, Input } from '@angular/core';
import { User } from '../../left-pannel/user-model';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({required:true}) user !: User;

}
