import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todos } from '../../models/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  providers: [TodosService],
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todos>>([]);

  ngOnInit(): void {
    this.todoService
      .getTodosFromAPI()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
          // throw new Error('failed to fetch todos...');
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });

    // console.log(this.todoServices.todoItems);
    // this.todoItems.set(this.todoServices.todoItems);
  }
}
