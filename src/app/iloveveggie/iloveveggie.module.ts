import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ILoveVeggieRoutingModule } from './iloveveggie-routing.module';
import { ILoveVeggieComponent } from './iloveveggie.component';
import { VegBoxComponent } from './veg-box/veg-box.component';
import { VegSignupComponent } from './veg-signup/veg-signup.component';
import { VegDetailComponent } from './veg-detail/veg-detail.component';
import { VegListComponent } from './veg-list/veg-list.component';
import { VegWalletComponent } from './veg-wallet/veg-wallet.component';
import { VegCartComponent } from './veg-cart/veg-cart.component';
import { VegBoxHorizonComponent } from './veg-list/veg-box-horizon/veg-box-horizon.component';


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
    VegBoxComponent,
    VegSignupComponent,
    VegDetailComponent,
    VegListComponent,
    VegWalletComponent,
    VegCartComponent,
    VegBoxHorizonComponent
  ],
  providers: [
  ]
})
export class ILoveVeggieModule { }
