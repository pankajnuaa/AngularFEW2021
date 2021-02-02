import { ShoppingListItem } from "../../models";
import { BehaviorSubject, Observable } from 'rxjs'
import { NavigationBehaviorOptions } from "@angular/router";
export class ShoppingDataService {
  //observe list of shopping items(Subject)
  private fakeData: ShoppingListItem[] = [
    { id: '1', description: 'Ice Cream', purchased: false },
    { id: '2', description: 'Shoe Polish', purchased: true }
  ];
  private maxId = 3;
  private subject = new BehaviorSubject<ShoppingListItem[]>(this.fakeData);

  getObservable(): Observable<ShoppingListItem[]> {
    return this.subject.asObservable();
  }

  addItem(description: string): void {
    this.fakeData.push({ id: (this.maxId++).toString(), description, purchased: false });
    //this would be some async code that goes to the api
    this.subject.next(this.fakeData);
  }




  markItemAsPurchased(item: ShoppingListItem): void {
    const storedItem = this.fakeData.filter(i => i.id == item.id)[0].purchased = true;
    //this would be some async code that goes to the api
    this.subject.next(this.fakeData);
  }
}
