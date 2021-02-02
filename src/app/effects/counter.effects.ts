import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { Actions, createEffect } from "@ngrx/effects";
import { filter, map, tap } from 'rxjs/operators';
import * as actions from '../actions/counter.actions';
import * as appActions from '../actions/app.actions';

@Injectable()
export class CounterEffects {

  // when we get an application started
  // check localStorage for "by"
  // if it is there
  // - turn it into actio.countBySet(by)
  // if not , don't do anything

  readSavedCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => localStorage.getItem('by')),
      filter(by => by !== null), // stop here if null
      map(by => parseInt(by, 10)), // turn it into a base 10 number from the string
      map(by => actions.countBySet({ by })) // what comes out here gets sent to the reducer
    )
    , { dispatch: false });
  // logItAll$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(a => console.log(`got an action of type ${a.type}`))
  //   ), { dispatch: false });
  // actions.countBySet => save it.

  saveCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false });
  constructor(private actions$: Actions) { }
}
