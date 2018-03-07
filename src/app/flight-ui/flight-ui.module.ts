import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { FlightRoutingModule } from './flight-ui-routing.module';
import { FlightUiComponent } from './flight-ui.component';
import { CurrentFlightComponent } from './current-flight/current-flight.component';
import { UpcomingFlightComponent } from './upcoming-flight/upcoming-flight.component';
import { OneFlightComponent } from './upcoming-flight/one-flight/one-flight.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlightRoutingModule
  ],
  declarations: [
    FlightUiComponent,
    CurrentFlightComponent,
    UpcomingFlightComponent,
    OneFlightComponent
  ],
  providers: [
  ]
})
export class FlightModule { }
