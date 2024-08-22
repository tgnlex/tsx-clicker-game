import { Component } from 'preact';
import state from '../../lib/state.ts';
import { upgradeStore } from '../../lib/store/upgrade.ts';
function handleClick(upgrade) {
  if (state.coins.value > upgrade.price) {
    upgrade.buy();
  }
}

class Upgrades extends Component {
  render() {
    return (
      upgradeStore.map((upgrade) => {
        <li class="upgrade-list-item list-item item" key={upgrade.id}>
          <button onclick={handleClick(upgrade)} class="btn-upgrade">
            {upgrade.name}
            $ {upgrade.price}
          </button>
        </li>
        }
      ) 
    )
  }
}
export default Upgrades;
