import Building from '../interface/building.ts';
import state from '../state/state.ts';


export function updateIncome(building: Building) {
  state.income.value = state.income.value + building.baseIncome
}

export function updatePrice(building: Building) {
  building.price += building.price * 0.1;
  return building.price;
}
export function buyBuilding(building: Building) {
  if (state.coins.value >= building.price) {
    building.owned += 1;
    state.coins.value = state.coins.value - building.price;
    building.price = updatePrice(building); 
    updateIncome(building);
    console.log(state.income.value);
  } else {
    return;
  }
}
