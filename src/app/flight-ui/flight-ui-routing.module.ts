import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { FlightUiComponent } from './flight-ui.component';

const routes: Routes = [
  Route.withShell([
    { path: 'flight', component: FlightUiComponent, data: { title: extract('flight') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FlightRoutingModule { }
