export interface IState {
  counter: number;
}

export type IActions =
  | {
      type: 'INCREMENT';
    }
  | {
      type: 'DECREMENT';
    };

export interface IContext {
  state: IState;
  set: React.Dispatch<IActions>;
}
