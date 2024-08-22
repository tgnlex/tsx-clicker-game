import {buyBuilding} from '../../lib/building';
import type {Building} from '../../../interface/building.ts';
interface Props {
  building: Building;
}
  
function BuildButton(props: Props) {
  const handleBuy = () => { buyBuilding(props.building)}
  return (
    <div class="buy-building-wrapper">
      <div class="building-count">
        <p class="text">
        {props.building.name}s: {props.building.owned}
        </p>
      </div>
      <button id={`btn-${props.building.name}`} onclick={handleBuy} class="btn-buy">
        <p>
          Buy {props.building.name}<br/>
          $ {props.building.price}
        </p>
      </button> 
    </div>
  )
}
export default BuildButton;
