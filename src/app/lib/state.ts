import {signal} from '@preact/signals';
import {calculateIncome} from '../lib/income.ts';
import {IState} from '../../interface/state.ts';

const state: IState = {}

state.total_clicks = signal(0);
state.coins =  signal(0);
state.income = signal(0);
state.base_click = signal(1);
state.click_level = signal(1);
state.power = state.base_click.value * state.click_level.value;

state.carts =       { name: "cart", owned: signal(0), baseIncome: signal(1), price: signal(50)     };
state.stalls =      { name: "stall", owned: signal(0), baseIncome: signal(5), price: signal(100)    };
state.shops =       { name: "shop", owned: signal(0), baseIncome: signal(10),    price: signal(500)    };
state.tanners =     { name: "tanner", owned: signal(0), baseIncome: signal(20),    price: signal(1000)   };
state.farms =       { name: "farm", owned: signal(0), baseIncome: signal(50),    price: signal(2500)   };
state.stables =     { name: "stable", owned: signal(0), baseIncome: signal(100),   price: signal(5000)   };
state.mines =       { name: "mine", owned: signal(0), baseIncome: signal(200),   price: signal(10000)  };
state.blacksmiths = { name: "blacksmith", owned: signal(0), baseIncome: signal(500),   price: signal(25000)  };
state.sawmills =    { name: "sawmill", owned: signal(0), baseIncome: signal(1000),  price: signal(50000)  };
state.factories =   { name: "factory", owned: signal(0), baseIncome: signal(5000),  price: signal(100000) };
state.railroads =   { name: "railroad", owned: signal(0), baseIncome: signal(10000), price: signal(250000) };

export default state;
