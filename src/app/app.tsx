import '../style/app.css';
import '../style/game.css';
import state from './state/state.ts';
import GameButton from './components/btn-main.tsx';
import BuildButton from './components/btn-buy.tsx'

export function App() {
  
  return (
    <div id="app">
      <main class="main-section">
      
        <div id="stats-main">
          <p id="coins">Coins: {state.coins.value}</p>
          <p id="income">Income: {state.income}</p>
        </div>
        <GameButton />
      </main>
      <div id="buy-buttons">
        <BuildButton building={state.carts} />
        <BuildButton building={state.stalls} />
      </div>
    </div>
  )
}
