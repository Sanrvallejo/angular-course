import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
        button {
            padding: 5px;
            margin: 5px 10px;
            width: 75px
        }
    `,
})
export class CounterPageComponent {
  constructor() {}

  counter = 10;

  //señal
  counterSignal = signal(10);

  increaseBy(value: number) {
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update((current) => current + value);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
