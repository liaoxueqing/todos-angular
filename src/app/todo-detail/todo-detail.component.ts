import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input() todo: Todo;

  constructor(
    private todoService: TodoService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getTodoById();
  }

  getTodoById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodoById(id).subscribe(todo => this.todo = todo);
  }

  goBack(): void {
    this.location.back();
  }

}
