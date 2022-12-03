import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleAppareilPageRoutingModule } from './single-appareil-routing.module';

import { SingleAppareilPage } from './single-appareil.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleAppareilPageRoutingModule,
    SharedModule,
  ],
  declarations: [SingleAppareilPage],
})
export class SingleAppareilPageModule {}
