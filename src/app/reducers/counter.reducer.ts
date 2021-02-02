import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';


export interface CounterState {
  current: number;
  by: number;
}

const initialState: CounterState = {
  current: 0,
  by: 1
};
const myReducer = createReducer(
  initialState,
  on(actions.countIncrementd, (s) => ({ ...s, current: s.current + s.by })),
  on(actions.countDecremented, (s) => ({ ...s, current: s.current - s.by })),
  on(actions.countReset, () => initialState),
  on(actions.countBySet, (s, a) => ({ ...s, by: a.by }))
);
// reducer(currentState, action) => newState
export function reducer(state: CounterState = initialState, action: Action): CounterState {
  // this must be a pure function
  // - you cannot change the aguments in any way
  // you can only produce a new value
  // you cannot do "side effect " here
  // -side effects are things like calling apis, chaning a route, updating other data

  return myReducer(state, action);

}
