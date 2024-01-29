import { OfFromComponent } from './components/of-from/of-from.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './components/observables/observables.component';
import { IntervalTimeComponent } from './components/interval-time/interval-time.component';
import { PromiseComponent } from './components/promise/promise.component';
import { ToArrayComponent } from './components/to-array/to-array.component';

const routes: Routes = [

  {path: 'promise', component:PromiseComponent},
  {path:'observer',component:ObservablesComponent},
  {path:'interval',component:IntervalTimeComponent},
  {path:'of',component:OfFromComponent},
  {path:'toArray',component:ToArrayComponent},
  {path: '**', redirectTo:'/promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
