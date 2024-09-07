import ScoreDisplay from '../display/score.tsx';
import GameButton from '../controls/btns/clicker.tsx';

function Main() {
  return (
    <main id="center-sect" class="main" role="main">
      <ScoreDisplay />
      <GameButton />  
    </main>
  )
}

export default Main;
