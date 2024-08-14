import ScoreDisplay from './score.tsx';
import GameButton from './btns/main.tsx';

function PrimaryWindow() {
  return (
    <section id="primary-window">
      <ScoreDisplay />
      <GameButton />  
    </section>
  )
}

export default PrimaryWindow;
