import Building from './building.ts';

export interface IState {
  total_clicks?: number, 
  coins?: number, 
  base_click?: number; 
  click_level?: number;
  power?: number;
  carts?: Building;
  stalls?: Building;
  shops?: Building;
  tanners?: Building;
  farms?: Building;
  stables?: Building;
  mines?: Building;
  blacksmiths?: Building;
  sawmills?:  Building;
  factories?: Building;
  railroads?: Buidling;
}
