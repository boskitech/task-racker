import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Itodo } from './todoInterface'; 


@Injectable({
  providedIn: 'root'
})

export class TodoserviceService {

  //Api url
  private _url: string = "http://localhost:3000/todos";
  private base_url: string = "http://localhost:3000/todos/";

  constructor(private http: HttpClient) { }

  //Get all Todos
  getTodo(): Observable<Itodo[]>{
    return this.http.get<Itodo[]>(this._url);
  }

  //Delete Todo
  deleteTodo(TodoForm: any): Observable<Itodo[]>{
    return this.http.delete<Itodo[]>(this.base_url + TodoForm.id);
  }

   //Update Todo
  updateTodo(updateTodo: any){
    return this.http.put<Itodo[]>(this.base_url + updateTodo.id, updateTodo);
  }

   //Add Todo
  addTodo(newTodo: Itodo){
    return this.http.post<Itodo[]>(this.base_url, newTodo);
  }


}
