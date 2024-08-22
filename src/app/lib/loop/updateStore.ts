import state from '../state.ts';
import upgrades from '../upgrades.ts'
import { upgradeStore } from '../store/upgrade.ts';

function addUpgrade(upgrade) {
  upgrade.stored.value = true;
  upgradeStore.push(upgrade);
}
function updateStore() {
  if (upgrades.ironWheels.owned == false && upgrades.ironWheels.stored == false) {
    upgrades.ironWheels.check();
    if (upgrades.ironWheels.available) {
      addUpgrade(upgrades.ironWheels);
    }
  }
};
export default updateStore;
