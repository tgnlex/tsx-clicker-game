import '../style/app.css';
import state from './state/state.ts';
import PrimaryWindow from './components/primary-window.tsx';
import BuildSection from './components/buildings.tsx';
export function App() {
  
  return (
    <div id="app">
      <header>
        <h1>TSClicker</h1>
      </header>
      <main id="main-row">
        <aside id="left-menu"></aside>
        <PrimaryWindow />
        <aside id="right-menu"></aside>
      </main>
      <footer>
        <BuildSection />
      </footer>
    </div>
  )
}
