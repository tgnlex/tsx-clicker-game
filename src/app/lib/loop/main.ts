import state from '../state.ts';
import upgrades from '../upgrades.ts'
import { upgradeStore } from '../store/upgrade.ts';
import updateStore from './updateStore.ts';
function addIncome() {
  return state.coins.value = state.coins.value + state.income.value;
}

function upgradeLoop() {
  window.setInterval(function() {
//    updateStore();
  }, 1000)
};
function incomeLoop() {
   window.setInterval(function() {
    addIncome();
    }, 1000);
}


export function loop() {
  incomeLoop();
  upgradeLoop();
}

