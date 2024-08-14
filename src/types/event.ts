export type Change<T> = {(current?: T, previous?: T): void};

export type Event<T> = {
  register(callback: Change<T>): () => boolean;
  fire(caller: (callback: Change<T>) => void): void;
};


export type Property<T> = {
  (value? | { (): T }): T;
  register(callback: Change<T>): () => boolean;
};
