import {signal} from '@preact/signals'
import state from '../state.ts';
class Upgrade {
  
    name: string = signal("");
    owned: boolean = signal(false);
    stored: boolean = signal(false);
    unlocked: boolean = signal(false);
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
    if (this.unlocked) {
      if (state.coins.value > this.price) {
        this.owned.value = true;
        this.activate();
      } else {alert(`Not enough coins to purchase ${this.name}`)}
    } else {
      console.log(`${this.name} is not unlocked`)
    }
  }
};

export default Upgrade;
