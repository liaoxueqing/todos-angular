import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';
import {TodoAddComponent} from './todo-add/todo-add.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'detail/:id', component: TodoDetailComponent },
  { path: 'add', component: TodoAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
