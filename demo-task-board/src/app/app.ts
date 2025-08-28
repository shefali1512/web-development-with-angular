import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { LeftPannel } from "./left-pannel/left-pannel";
import { RightPannel } from "./right-pannel/right-pannel";
import { User } from './left-pannel/user-model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, LeftPannel, RightPannel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-task-board');
  user !: User;

  getUserData(data: User) {
    this.user = data;
  }
}
