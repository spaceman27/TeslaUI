import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ILoveVeggieRoutingModule } from './iloveveggie-routing.module';
import { ILoveVeggieComponent } from './iloveveggie.component';
import { VegBoxComponent } from './veg-box/veg-box.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    ILoveVeggieRoutingModule
  ],
  declarations: [
    ILoveVeggieComponent,
    VegBoxComponent
  ],
  providers: [
  ]
})
export class ILoveVeggieModule { }
