


export type Cost = {
  [key: string]: number
} & {
  money?: number;
  energy?: number;
}


export type BaseCosts = {
  [key: string]: Cost;
} & {
  money?: Cost; 
  energy?: Cost;
}

