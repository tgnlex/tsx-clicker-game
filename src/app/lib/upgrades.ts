import {signal} from '@preact/signals';
import Upgrade from './constructors/upgrade.ts';
import IUpgrade from '../../interface/upgrade.ts';
import state from './state.ts';

const ironWheels = new Upgrade({
  name: "Iron Wheels",
  price: signal(100),
  requireCheck: function() {
    if (state.carts.owned.value > 0) { 
      console.log('requirements for iron wheels are satisfied')
      this.reqs.value == true;
    }
  },
  activate: function() {
    console.log('activating iron wheels')
    state.carts.baseIncome.value = state.carts.baseIncome.value * 2;
  }
});



export {ironWheels};
