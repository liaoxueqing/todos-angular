import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {TODOS} from './todos';
import {Todo} from './todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient,
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:8080/todos');
    // return of(TODOS);
  }

  getTodoById(id): Observable<Todo> {
    return of(TODOS.find(todo => todo.id === id));
  }
}
