import state from '../../lib/state.ts';
function ScoreDisplay() {        
  return (
    <div id="score">
        <p id="income">Income: {state.income}</p>
        <p id="coins">Coins: {state.coins.value}</p>
    </div>
  )
}
export default ScoreDisplay;
