import {Callback} from '../../types/index.ts';

function interval(duration: number = 1000, cb: Callback) {
  let loop = window.setInterval(cb, duration)
  return loop;
}

export default interval;
