import state from './state.ts';


function addIncome() {
  return state.coins.value = state.coins.value + state.income.value;
}


export function loop() {
  window.setInterval(function() {
    addIncome();
  }, 1000)
}

