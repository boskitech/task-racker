import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todo-content',
  templateUrl: './todo-content.component.html',
  styleUrls: ['./todo-content.component.scss']
})
export class TodoContentComponent implements OnInit {

// Variable Declaration

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  todos!: any;
  todoName!:string;
  todoItem!:string;
  todoQuantity!:string;
  editMenu!:boolean;

  constructor(private _formBuilder: FormBuilder, private _todoservice: TodoserviceService, private router: Router, private route: ActivatedRoute) {}


//Routing

goViewTodo(todos: { id: any; }){
  this.router.navigate([todos.id], {relativeTo: this.route});
 }

shoppingTodo(){
  this.router.navigate(['add/shoppingtodo']);
 }

readingTodo(){
  this.router.navigate(['add/readingtodo']);
 }

plainTodo(){
  this.router.navigate(['add/plaintodo']);
}


// Form Array Functionality

  get addItemField(){
    return this.secondFormGroup.get('addItemField') as FormArray;
  }

 get newField(){
    return this._formBuilder.group({
      item: [''],
      quantity: ['']
    })
 }

  addNewField(){
    this.addItemField.push(this.newField);
  }

//Get todo forms 

  getTodos(){
    this._todoservice.getTodo().subscribe(data => this.todos = data); 
  }

//SubmitTodo Functionality

   submitTodo(){
    this._todoservice.addTodo(this.secondFormGroup.value).subscribe( data => console.log('success', data), error => console.log('error', error));
    alert("Todo added");
    window.location.reload();
  }

//deleteTodo

  deleteTodo(todo: any){
    this._todoservice.deleteTodo(todo).subscribe(()=>{});
    alert("contact deleted");
    window.location.reload();
 }

//Remove additional Field Functionality

removeField(index:any){
  this.addItemField.removeAt(index)
}

//EditTodo Functionality

  editTodo(){
    this.editMenu = true;
  }
  rEditTodo(){
    this.editMenu = false;
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('0ff900' + color).slice(-6);
  }

// Init

  ngOnInit(): void {
    this.getTodos();
    this.editMenu = false;
    console.log(this.todos.value.length);

  //First FormGroup

    this.firstFormGroup = this._formBuilder.group({
      todoName: ['', Validators.required],
      todoDate: ['']
    });

  //Second FormGroup

    this.secondFormGroup = this._formBuilder.group({
      id:[''],
      todoName: this.firstFormGroup.controls['todoName'],
      todoDate: this.firstFormGroup.controls['todoDate'],
      todoItem:[''],
      todoQuantity:[''],
      addItemField : this._formBuilder.array([])
    });
  }
}