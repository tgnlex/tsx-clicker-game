import {signal} from '@preact/signals'
import state from '../state.ts';
class Upgrade {
  name: string = "";
  owned: boolean = signal(false);
  stored: boolean = signal(false);
  available: boolean = signal(false);
  reqs: boolean = signal(false);
  constructor(
    name: string, 
    price: number, 
    required: () => any, 
    activate: () => any
  ) {
    this.name = name;
    this.price = price;
    this.required = required;
    this.activate = activate;
  }
  buy() {
    if (state.coins.value > this.price) {
      this.owned.value = true;
      this.activate();
    }
    else {alert(`Not enough coins to purchase ${this.name}`)}
  }
  check() {
    if (this.reqs.value == true) { 
      this.available.value = true;
      console.log(`${this.name} available: ${this.available.value}`)
    }
    else {return;
    }
  }
};

export default Upgrade;
