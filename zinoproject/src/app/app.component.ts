import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zinos Todos';
  todos= [
    { 
    label: 'Steal Sams babe  ', 
    done: false, 
    priority: 3
  },
  { 
    label: 'Slap Zino Face  ', 
    done: true, 
    priority: 2
  },  
  { 
    label: 'Go to bed early  ', 
    done: false, 
    priority: 4
  },   { 
    label: 'Fly to Estonia  ', 
    done: false, 
    priority: 1
  },  
];

addTodo(newTodoLabel){
  var newTodo= {
    label: newTodoLabel,
    priority: 1,
    done: false, 
  };
  this.todos.push(newTodo);
}
deleteTodo(todo) {
  this.todos= this.todos.filter(t => t.label !== todo.label)
}
}
