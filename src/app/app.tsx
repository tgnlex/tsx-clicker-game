import { Component } from 'preact';
import {loop} from './lib/loop/main.ts';
import Main from './components/center.tsx';
import LeftMenu from './components/layout/left.tsx';
import RightMenu from './components/layout/right.tsx';
import BuildingShop from './components/buildings.tsx';
import Header from './components/layout/header.tsx';
import Footer from './components/layout/footer.tsx'
import Row from './components/ui/row.tsx';
import './style/app.css';


class App extends Component {
  render() {
    loop();
    return (
      <div id="app">
        <Header />
        <Row id="main-row">
          <LeftMenu />
          <Main />
          <RightMenu />
        </Row>
        <BuildingShop />
        <Footer />
      </div>
    )
  }
}
export default App;
