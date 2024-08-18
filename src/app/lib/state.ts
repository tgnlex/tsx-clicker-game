import {signal} from '@preact/signals';
import {calculateIncome} from '../lib/income.ts';
import {State} from '../../interface/state.ts';

const state: State = {}

state.total_clicks = signal(0);
state.coins =  signal(0);
state.income = signal(0);
state.base_click = signal(1);
state.click_level = signal(1);
state.power = state.base_click.value * state.click_level.value;

state.carts =       {name: "cart", owned: 0, baseIncome: 1, price: signal(50)     };
state.stalls =      {name: "stall", owned: 0, baseIncome: 5, price: signal(100)    };
state.shops =       {name: "shop", owned: 0, baseIncome: 10,    price: signal(500)    };
state.tanners =     {name: "tanner", owned: 0, baseIncome: 20,    price: signal(1000)   };
state.farms =       {name: "farm", owned: 0, baseIncome: 50,    price: signal(2500)   };
state.stables =     {name: "stable", owned: 0, baseIncome: 100,   price: signal(5000)   };
state.mines =       {name: "mine", owned: 0, baseIncome: 200,   price: signal(10000)  };
state.blacksmiths = {name: "blacksmith", owned: 0, baseIncome: 500,   price: signal(25000)  };
state.sawmills =    {name: "sawmill", owned: 0, baseIncome: 1000,  price: signal(50000)  };
state.factories =   {name: "factory", owned: 0, baseIncome: 5000,  price: signal(100000) };
state.railroads =   {name: "railroad", owned: 0, baseIncome: 10000, price: signal(250000) };

export default state;
