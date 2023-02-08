import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { TodoContentComponent } from './todo-content/todo-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: 'todo', pathMatch: 'full' },
  {path: 'todo', component:TodoContentComponent},
  {path: 'add/:type', component:AddTodoComponent},
  {
    path : 'todo/:id', 
    component: ViewTodoComponent 
  },
  {path: "**", component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
