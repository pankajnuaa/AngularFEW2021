import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-rhs',
  templateUrl: './rhs.component.html',
  styleUrls: ['./rhs.component.scss']
})
export class RhsComponent implements OnInit {

  constructor(private service: MessageService) { }
  message = '';
  ngOnInit(): void {
  }

  doIt(): void {
    this.message = this.service.getMessage();
  }

}
