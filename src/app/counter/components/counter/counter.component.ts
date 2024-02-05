import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  counter: number = 10;

  add(): void {
    this.counter++;
  }

  remove(): void {
    this.counter--;
  }

  reset(): void {
    this.counter = 10;
  }
}
