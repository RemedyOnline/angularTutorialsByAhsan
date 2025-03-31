import { Component, signal } from '@angular/core';
import { GreetingsComponent } from '../../components/greetings/greetings.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from '../../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingsComponent, FormsModule, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Angular Tutorials by AHSAN!';
  mySignal = signal('first signal instance bro!');
  homeMessage = signal('Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii!');
  searchParameter = '';

  searchHandler() {
    console.log('User typed: ', this.searchParameter, '  in the search box...');
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.searchParameter = `You entered ${this.searchParameter}`;
  }

  searchBtnHandler() {
    console.log('Search btn clicked!!!!');
  }

  keyUpHandler(eventt: KeyboardEvent) {
    console.log(`User pressed the ${eventt.key} key!`);
  }

  // ---------------------------------------
  handleClick() {
    console.log('Button clicked!');
  }

  onKeyPress(event: KeyboardEvent) {
    console.log('User pressed: ', (event.target as HTMLInputElement).value);
  }
}
