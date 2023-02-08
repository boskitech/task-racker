import { TodoserviceService } from './../todoservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.scss']
})
export class ViewTodoComponent implements OnInit {

  public todoId: any;
  public todo: any;

  constructor(private _todoservice: TodoserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap ) => {
      let id = parseInt(<any>params.get('id'));
      this.todoId = id;
      this.getTodos();
    });
  }

  getTodos(){
    this._todoservice.getTodo().subscribe(data => {
    let res = data.filter(item => item.id == this.todoId);
    this.todo = res;  
  });
 }

 goBack(){
  this.router.navigate(['/todo']);
 }

}
