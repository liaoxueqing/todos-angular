import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo: Todo;

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
    this.getTodoById();
  }

  getTodoById(): void {
    this.todo = {
      id: 1,
      content: 'homework',
      isChecked: false
    };
  }

  goBack(): void {
    this.location.back();
  }

}
