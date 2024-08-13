import Cost from './cost.ts';
export type GameState = {
  [key: string]: number;
} & {
  coins: number;
  energy: number;
  costMultiplier: number; 
  baseCosts: {
    coins: Cost;
    circuits Cost;
  };
};
