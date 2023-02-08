import { TodoserviceService } from './../todoservice.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  todoType!:string;
  displayType!:any;
  units!: any
  selected!:any;
  plainTodo!: boolean;
  priorities = [
    {value: 'low', viewValue: 'Low'},
    {value: 'medium', viewValue: 'Medium'},
    {value: 'high', viewValue: 'High'}
   ]
  

  constructor(private _formBuilder: FormBuilder,
              private _todoservice: TodoserviceService, 
              private router: Router, 
              private route: ActivatedRoute
              ) {}
 
  // Form Array Functionality

  get addItemField(){
    return this.secondFormGroup.get('addItemField') as FormArray;
  }

 get newField(){
    return this._formBuilder.group({
      item: [''],
      quantity: [''],
      subTodoType:['']
    })
 }

  addNewField(){
    this.addItemField.push(this.newField);
  }

  //Remove additional Field Functionality

  removeField(index:any){
    this.addItemField.removeAt(index)
  }

  //SubmitTodo Functionality

  submitTodo(){
    this._todoservice.addTodo(this.secondFormGroup.value).subscribe( data => console.log('success', data), error => console.log('error', error));
    alert("Todo added");
    this.router.navigate(['/todo']);
  }

  goBack(){
    this.router.navigate(['/todo']);
   }

  // Init

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap ) => {
      let type = (<any>params.get('type'));
      this.todoType = type;

      switch(this.todoType){
        case 'shoppingtodo':
          this.displayType = 'Shopping Todo';
          this.units = [
            {value: 'pieces', viewValue: 'Piece(s)'},
            {value: 'bags', viewValue: 'bag(s)'},
            {value: 'sachets', viewValue: 'sachet(s)'},
            {value: 'kg', viewValue: 'Kg'},
            {value: 'litre', viewValue: 'Litre'}
           ]
          this.selected="Quantity"
          break;
        case 'readingtodo':
          this.displayType = 'Reading Todo';
          this.units = [
            {value: 'pages', viewValue: 'Pages'},
            {value: 'mins', viewValue: 'Minutes'},
            {value: 'hours', viewValue: 'Hours'}
           ]
           this.selected="Time/Pages"
          break;  
        case 'plaintodo':
          this.displayType = 'Plain Todo';
          this.plainTodo = true;
          break;
      }
    });

  //First FormGroup

    this.firstFormGroup = this._formBuilder.group({
      todoName: ['', Validators.required],
      todoDate: ['', Validators.required],
      priority: ['', Validators.required]
    });

  //Second FormGroup

    this.secondFormGroup = this._formBuilder.group({
      id:[''],
      todoName: this.firstFormGroup.controls['todoName'],
      todoDate: this.firstFormGroup.controls['todoDate'],
      priority: this.firstFormGroup.controls['priority'],
      todoItem:[''],
      todoQuantity:[''],
      todoType:[''],
      addItemField : this._formBuilder.array([])
    });
  }

}