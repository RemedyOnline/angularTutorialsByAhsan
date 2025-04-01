import { inject, Injectable } from '@angular/core';
import { Todos } from '../models/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  http = inject(HttpClient);
  // todoItems: Array<Todos> = [
  //   {
  //     id: 0,
  //     userId: 1,
  //     title: 'Buy provisions',
  //     completed: false,
  //   },
  //   {
  //     id: 1,
  //     userId: 1,
  //     title: 'Trim hair',
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     userId: 1,
  //     title: 'Go for food from Granny',
  //     completed: true,
  //   },
  //   {
  //     id: 0,
  //     userId: 1,
  //     title: 'Finish with tutorial 2!',
  //     completed: false,
  //   },
  // ];
  //constructor() { }

  getTodosFromAPI() {
    const APIurl = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Array<Todos>>(APIurl);
  }
}
