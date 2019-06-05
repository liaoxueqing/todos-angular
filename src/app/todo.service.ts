import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient,
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:8080/todos');
  }

  getTodoById(id): Observable<Todo> {
    return this.http.get<Todo>('http://localhost:8080/todos/' + id);
  }
}
