import Building from '../../interface/building.ts';
import state from './state.ts';


export function updateIncome(building: Building) {
  state.income.value = state.income.value + building.baseIncome * building.owned;
}

export function updatePrice(building: Building) {
  building.price.value += building.price.value * 0.1;
  return building.price.value;
}
export function buyBuilding(building: Building) {
  if (state.coins.value >= building.price) {
    building.owned += 1;
    state.coins.value = state.coins.value - building.price;
    updateIncome(building);
    building.price.value = updatePrice(building); 
  } else {
    console.log(`Not enough coins to porchase ${building.name}`)
  }
}
