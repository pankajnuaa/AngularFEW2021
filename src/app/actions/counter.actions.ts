import { createAction } from '@ngrx/store';

export const countIncrementd = createAction(
  '[app counter] count incremented'
);

export const countDecremented = createAction(
  '[app counter] count decremented'
);
