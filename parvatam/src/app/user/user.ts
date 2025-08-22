import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from "../shared/card/card";
import { type UserModel } from './user.model';


@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
@Input({ required: true }) user!: UserModel;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
