import { Component, OnInit,EventEmitter, Output  } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title : string;
  description : string;
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    //console.log("tesss");
    const todo = {
      sno : 8,
      title : this.title,
      desc : this.description,
      active : true 
    } 
    this.todoAdd.emit(todo);
  }
}
