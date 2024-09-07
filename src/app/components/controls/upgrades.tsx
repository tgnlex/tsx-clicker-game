import { Component } from 'preact';
import UpgradeButton from './btns/upgrade.tsx';
import state from '../../lib/state.ts';
import { availableUpgrades } from '../../lib/loop/updateStore.ts';

class Upgrades extends Component {
  render() {
    return (
      availableUpgrades.map((upgrade: any) => {
        <li key={upgrade.id} class="upgrade-list-item list-item item">
          <UpgradeButton upgrade={upgrade} />
        </li>
      })
    ) 
  }
}
export default Upgrades;
