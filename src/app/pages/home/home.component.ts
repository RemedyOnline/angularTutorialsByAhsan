import { Component, signal } from '@angular/core';
import { GreetingsComponent } from '../../components/greetings/greetings.component';

@Component({
  selector: 'app-home',
  imports: [GreetingsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Angular Tutorials by AHSAN!';
  mySignal = signal('first signal instance bro!');
  homeMessage = signal('Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii!');
}
