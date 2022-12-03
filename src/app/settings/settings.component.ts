import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AppareilsService } from '../services/appareils.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  handlerMessage!: string;
  roleMessage!: string;
  constructor(
    private alertCtrl: AlertController,
    private appareilsService: AppareilsService
  ) {}

  ngOnInit() {}

  async onToggleLights() {
    const alert = await this.alertCtrl.create({
      header: 'Êtes-vous sûr de vouloir éteindre la lumière',
      buttons: [
        {
          text: 'Non ! ',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: "Let's Go",
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

    if (role === 'confirm') {
      this.appareilsService.turnAllOn();
    }
  }
}
