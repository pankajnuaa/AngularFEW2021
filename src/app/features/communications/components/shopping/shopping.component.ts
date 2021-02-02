import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingListItem } from '../../models';
import { ShoppingDataService } from '../services/shoppint-data.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  // stuff: ShoppingListItem[] = [
  //   { id: '1', description: 'Beer', purchased: false },
  //   { id: '2', description: 'Ice Cream', purchased: true }
  // ];
  stuff$: Observable<ShoppingListItem[]>;
  labelForList = 'Buy this crap'
  constructor(private shoppingService: ShoppingDataService) { }

  ngOnInit(): void {
    this.stuff$ = this.shoppingService.getObservable();
  }

  onItemAdded(item: string): void {
    this.shoppingService.addItem(item);
    console.log(`Parent got notification that ${item} was added`)
  }

}
