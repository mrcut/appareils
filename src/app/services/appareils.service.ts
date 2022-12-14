import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appareil } from '../models/appareil';

@Injectable({
  providedIn: 'root',
})
export class AppareilsService {
  appareilsList!: Appareil[];
  constructor(private http: HttpClient) {}

  getAppareils() {
    return this.http.get<Appareil[]>('assets/data/appareilsList.json');
  }

  turnAllOn() {
    for (let i = 0; i < Appareil.length; i++) {
      // this.appareilsList[i].isOn = false;
    }
  }
}
