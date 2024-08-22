import ScoreDisplay from './score.tsx';
import GameButton from './btns/clicker.tsx';

function Main() {
  return (
    <main id="center-sect" class="main" role="main">
      <ScoreDisplay />
      <GameButton />  
    </main>
  )
}

export default Main;
