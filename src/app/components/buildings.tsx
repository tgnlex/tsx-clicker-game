import state from '../state/state.ts';
import BuildButton from './btns/build.tsx';
function BuildSection() {
  return (
    <div id="build-buttons">
      <BuildButton building={state.carts} />
      <BuildButton building={state.stalls} />
      <BuildButton building={state.shops} /> 
      <BuildButton building={state.tanners} />
      <BuildButton building={state.farms} /> 
      <BuildButton building={state.stables} />
      <BuildButton building={state.mines} />
      <BuildButton building={state.blacksmiths} />
      <BuildButton building={state.sawmills} />
      <BuildButton building={state.factories} />
      <BuildButton building={state.railroads} />
    </div>
  )
}

export default BuildSection;
