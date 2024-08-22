import state from '../state.ts';
import {ironWheels} from '../upgrades.ts'
import { upgradeStore } from '../store/upgrade.ts';

function addUpgrade(upgrade) {
  upgrade.stored.value = true;
  upgradeStore.push(upgrade);
}
function updateStore() {
  if (ironWheels.stored == false) {
    ironWheels.requireCheck();
    ironWheels.check();
    if (ironWheels.available.value == true) {
      console.log('attempting to add upgrade')
      addUpgrade(ironWheels);
    }
  }
};
export default updateStore;
