import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState, selectCountDecrementDisabled, selectCounterResetDisabled, selectGetCurrentCount } from 'src/app/reducers';
import *  as action from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  current$: Observable<number>;
  resetDisabled$: Observable<boolean>;
  decrementDiabled$: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.current$ = this.store.select(selectGetCurrentCount);
    this.resetDisabled$ = this.store.select(selectCounterResetDisabled);
    this.decrementDiabled$ = this.store.select(selectCountDecrementDisabled);
  }

  increment(): void {
    this.store.dispatch(action.countIncrementd());
  }

  decrement(): void {
    this.store.dispatch(action.countDecremented());
  }

  reset(): void {
    this.store.dispatch(action.countReset());
  }



}
