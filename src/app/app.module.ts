import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommunicationsModule } from './features/communications/communications.module';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CountbyComponent } from './components/countby/countby.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter.effects';
@NgModule({
  declarations: [
    AppComponent,
    MastheadComponent,
    NavComponent,
    DashboardComponent,
    CounterComponent,
    CountbyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommunicationsModule,
    StoreModule.forRoot(reducers),
    // this is needed for redex devtool
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
