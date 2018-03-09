import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { ILoveVeggieComponent } from './iloveveggie.component';

const routes: Routes = [
  Route.withShell([
    { path: 'iloveveggie', component: ILoveVeggieComponent, data: { title: extract('iloveveggie') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ILoveVeggieRoutingModule { }
