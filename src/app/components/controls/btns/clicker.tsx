import {addClick} from '../../../lib/click.ts';

function GameButton() {
  return (
    <button onclick={addClick} id="btn-main">Click Here</button>
  )
}

export default GameButton;
