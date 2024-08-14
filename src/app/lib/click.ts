import state from '../state/state.ts';

export function addClick() {
  state.total_clicks.value = state.total_clicks.value + 1; 
  state.coins.value = state.coins.value + state.power;
  console.log(state.coins.value)
  return state;
}
