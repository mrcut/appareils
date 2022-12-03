import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Appareil } from '../models/appareil';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.page.html',
  styleUrls: ['./single-appareil.page.scss'],
})
export class SingleAppareilPage implements OnInit {
  appareilName!: string;
  appareil!: {
    id: string;
    name: string;
    description: string[];
    isOn: boolean;
  };

  constructor(
    private storage: Storage,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParamMap.subscribe((params) => {
      if (this.router.getCurrentNavigation()!.extras.state) {
        this.appareil =
          this.router.getCurrentNavigation()!.extras.state!['appareilName'];
        console.log(this.appareil);
      }
    });
  }

  ngOnInit() {}

  onToggleAppareil() {
    if (this.appareil.isOn === true) {
      this.appareil.isOn = false;
    } else {
      this.appareil.isOn = true;
    }
  }

  saveToStorage(appareil: Appareil) {
    console.log(appareil);
    console.log(this.appareil.name);
    localStorage.setItem(
      this.appareil.name,
      JSON.stringify({
        id: this.appareil.id,
        name: this.appareil.name,
        description: this.appareil.description,
        isOn: this.appareil.isOn,
      })
    );
  }
  deleteFromStorage(appareil: Appareil) {
    console.log(appareil.id);
    localStorage.removeItem(appareil.name);
  }
}
