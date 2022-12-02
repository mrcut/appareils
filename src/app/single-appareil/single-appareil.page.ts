import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.page.html',
  styleUrls: ['./single-appareil.page.scss'],
})
export class SingleAppareilPage implements OnInit {
  appareilName!: string;
  appareil!: {
    name: string;
    description: string[];
    isOn: boolean;
  };

  constructor(private route: ActivatedRoute, private router: Router) {
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
    if (this.appareil.isOn == true) {
      this.appareil.isOn = false;
    } else {
      this.appareil.isOn = true;
    }
  }
}
