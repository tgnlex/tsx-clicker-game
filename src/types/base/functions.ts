import {BiArray} from './array.ts';
export type Noop = () => {};
export type VoidFn = () => void;
export type StringFn = (x?: string, y?: string) => string;
export type IntFn = (x?: number, y?: number, z?: number) => number;
export type BoolFn = (x?: boolean, y?: boolean) => boolean;
export type ArrayFn = (x?: BiArray, y?: BiArray) => string[] | number[];

export type Callback = VoidFn | StringFn | IntFn | BoolFn | ArrayFn | Noop;

