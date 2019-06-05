import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {TODOS} from './todos';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return of(TODOS);
  }
}
