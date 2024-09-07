import state from '../state.ts';
import ironWheels from '../objects/upgrades/iron-wheels.ts';

const upgradeLoop = interval(5000, ironWheels.check)
const incomeLoop = interval(1000, addIncome);



export function loop() {
  incomeLoop();
  upgradeLoop();
}

