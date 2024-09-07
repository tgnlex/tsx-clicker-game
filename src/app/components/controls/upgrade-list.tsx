import {Component} from 'preact';
import Upgrades from './upgrades.tsx';

class UpgradeList extends Component {
  render() {
    return (
      <ul id="upgrade-list" class="list">
        <Upgrades />
      </ul>
    )
  }
}

export default UpgradeList;
