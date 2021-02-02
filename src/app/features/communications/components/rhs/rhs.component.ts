import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-rhs',
  templateUrl: './rhs.component.html',
  styleUrls: ['./rhs.component.scss']
})
export class RhsComponent implements OnInit {

  constructor(private service: MessageService) { }
  isEven$: Observable<boolean>;
  message$: Observable<string>;
  message = '';
  ngOnInit(): void {
    this.message$ = this.service.getMessageObservable();

    this.isEven$ = this.service
      .getMessageObservable()
      .pipe(map(val => val.length % 2 == 0));
  }

  doIt(): void {
    this.message = this.service.getMessage();
  }

}
