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
    requireCheck: () => any, 
    activate: () => any
  ) {
    this.name = name;
    this.price = price;
    this.requireCheck = requireCheck;
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
    console.info(this.reqs.value)
    if (this.reqs.value) { 
      this.available.value = true;
    }
    else {return;
    }
  }
};

export default Upgrade;
