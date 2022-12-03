import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppareilsPageRoutingModule } from './appareils-routing.module';

import { AppareilsPage } from './appareils.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AppareilsPageRoutingModule,
  ],
  declarations: [AppareilsPage],
})
export class AppareilsPageModule {}
