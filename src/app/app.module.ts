import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './components/promise/promise.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { IntervalTimeComponent } from './components/interval-time/interval-time.component';
import { OfFromComponent } from './components/of-from/of-from.component';
import { ToArrayComponent } from './components/to-array/to-array.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    ObservablesComponent,
    IntervalTimeComponent,
    OfFromComponent,
    ToArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
