import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AppareilsService } from '../services/appareils.service';
import { Appareil } from '../models/appareil';

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.page.html',
  styleUrls: ['./appareils.page.scss'],
})
export class AppareilsPage implements OnInit {
  appareilsList!: Appareil[];

  constructor(
    private router: Router,
    private appareilsService: AppareilsService
  ) {}

  ngOnInit() {
    this.appareilsService.getAppareils().subscribe(
      (res) => {
        this.appareilsList = res;
      },
      (err) => {
        console.log('error');
      }
    );
  }

  onLoadAppareil(appareil: { name: string; description: string[] }) {
    let navigationExtras: NavigationExtras = {
      state: {
        appareilName: appareil,
      },
    };
    this.router.navigate(['/single-appareil'], navigationExtras);
  }
}
