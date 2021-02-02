import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  current$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.current$ = this.store.pipe(map(s => s.counter.current));
  }

  increment(): void {
    this.store.dispatch({ type: 'increment' });
  }

  decrement(): void {
    this.store.dispatch({ type: 'decrement' });
  }



}
