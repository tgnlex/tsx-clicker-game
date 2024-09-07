import state from './state.ts';

export function addClick() {
  state.total_clicks.value = state.total_clicks.value + 1; 
  state.coins.value = state.coins.value + state.power;
  return state;
}
