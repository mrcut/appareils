import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { IonicModule } from '@ionic/angular';
import { SettingsComponent } from '../settings/settings.component';

@NgModule({
  declarations: [HeaderComponent, SettingsComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, SettingsComponent],
})
export class SharedModule {}
