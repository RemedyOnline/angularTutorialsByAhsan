import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greetings',
  imports: [],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.css',
})
export class GreetingsComponent {
  message = input('Hello hello!');
}
