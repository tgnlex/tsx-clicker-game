import {signal} from '@preact/signals';
import Upgrade from '../constructors/upgrade.ts';
// import IUpgrade from '../../interface/upgrade.ts';
import state from '../state.ts';

const ironWheels = {
  name: "Iron Wheels",
  price: signal(100),
  check: () => {
    if (state.carts.owned.value > 5) { 
      console.info('requirements for iron wheels are satisfied')
      this.unlocked.value == true;
    } else {
      return;
    }
  },
  activate: () => {
    console.info('activating iron wheels')
    state.carts.baseIncome.value = state.carts.baseIncome.value * 2;
  }
});



export default ironWheels;
