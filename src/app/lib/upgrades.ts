import Upgrade from '../../interface/upgrade.ts';
import state from './state.ts';

const ironWheels: Upgrade = {
  name: "wheels_1",
  owned: false,
  available: false, 
  effect: () => {
    state.carts.baseIncome.value = state.carts.baseIncome.value * 2;
    return state.carts.baseIncome.value;
  }
};

const upgrades: Upgrade[] = [];


