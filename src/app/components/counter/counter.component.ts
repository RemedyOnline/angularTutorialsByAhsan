import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counterValue = 0;
  minusClickHandler() {
    this.counterValue--;
  }
  plusClickHandler() {
    this.counterValue++;
  }

  counterNumber = signal(9);
  incrementHandler() {
    this.counterNumber.set(this.counterNumber() + 1);
    console.log(this.counterNumber);
  }
  decrementHandler() {
    this.counterNumber.update((val) => val - 1);
    console.log(this.counterNumber);
  }
  resetHandler() {
    this.counterNumber.set(0);
  }
}
