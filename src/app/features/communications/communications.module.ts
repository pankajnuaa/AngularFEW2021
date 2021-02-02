import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationsComponent } from './communications.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEntryComponent } from './components/shopping-entry/shopping-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingDataService } from './components/services/shoppint-data.service';
import { LhsComponent } from './components/lhs/lhs.component';
import { RhsComponent } from './components/rhs/rhs.component';
import { MessageService } from './components/services/message.service';



@NgModule({
  declarations: [CommunicationsComponent, ShoppingComponent, ShoppingListComponent, ShoppingEntryComponent, LhsComponent, RhsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CommunicationsComponent],
  providers: [ShoppingDataService, MessageService]
})
export class CommunicationsModule { }
