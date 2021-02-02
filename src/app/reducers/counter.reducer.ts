import { Action } from '@ngrx/store';


export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
};

// reducer(currentState, action) => newState
export function reducer(state: CounterState = initialState, action: Action): CounterState {
  // this must be a pure function
  // - you cannot change the aguments in any way
  // you can only produce a new value
  // you cannot do "side effect " here
  // -side effects are things like calling apis, chaning a route, updating other data
  switch (action.type) {
    case 'increment':
      return {
        current: state.current + 1
      };
      break;
    case 'decrement':
      return {
        current: state.current - 1
      };
    default:
      return state;
  }


}
