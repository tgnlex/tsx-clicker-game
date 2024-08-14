

interface ObjectSaveData {
  Count: number;
  isRevealed: boolean;
  IsCapShown: boolean;
}

export interface SaveData {
  Data: { [index: string]: ObjectSaveData };
}
