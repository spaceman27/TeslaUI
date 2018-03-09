import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { FlightRoutingModule } from './flight-ui-routing.module';
import { NgxBarcodeModule } from 'ngx-barcode';

import { FlightUiComponent } from './flight-ui.component';
import { CurrentFlightComponent } from './current-flight/current-flight.component';
import { UpcomingFlightComponent } from './upcoming-flight/upcoming-flight.component';
import { OneFlightComponent } from './upcoming-flight/one-flight/one-flight.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlightRoutingModule,
    NgxBarcodeModule
  ],
  declarations: [
    FlightUiComponent,
    CurrentFlightComponent,
    UpcomingFlightComponent,
    OneFlightComponent,
    TicketComponent
  ],
  providers: [
  ]
})
export class FlightModule { }
