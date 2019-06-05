import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {TodoService} from '../todo.service';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  constructor(
    private todoService: TodoService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  add(content: string): void {
    content = content.trim();
    if (!content) { return; }
    // this.todoService.addTodo({ content } as Todo);
  }

}
