import {buyBuilding} from '../lib/building.ts';
interface Props {
  building: Building;
}
  
function BuildButton(props: Props) {
  const handleBuy = () => { buyBuilding(props.building)}
  return (
    <button id={`btn-${props.building.name}`} onclick={handleBuy} class="btn-buy">
        <p>Buy {props.building.name}</p>
        <p>Value {props.building.price}</p>
    </button>
  )
}
export default BuildButton;
