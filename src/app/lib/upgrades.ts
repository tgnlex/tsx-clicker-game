import {signal} from '@preact/signals';
import Upgrade from './constructors/upgrade.ts';
import IUpgrade from '../../interface/upgrade.ts';
import state from './state.ts';

const ironWheels: IUpgrade = new Upgrade({
  name: "Iron Wheels",
  price: signal(100),
  required: () => {
    if (state.carts.owned.value > 0) { 
      this.reqs.value = true;
    }
  },
  activate: () => {
    if (this.owned) {
      state.carts.baseIncome.value = state.carts.baseIncome.value * 2;
    } else { 
      return;
    } 
  }
});

const upgrades = {};
upgrades.ironWheels = ironWheels;

export default upgrades;



