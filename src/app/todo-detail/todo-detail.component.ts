import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo: Todo;

  constructor(
    private todoService: TodoService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getTodoById();
  }

  getTodoById(): void {
    const id = 1;
    this.todoService.getTodoById(id).subscribe(todo => this.todo = todo);
  }

  goBack(): void {
    this.location.back();
  }

}
