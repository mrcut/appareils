import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBarPage } from './tab-bar.page';

const routes: Routes = [
  {
    path: '',
    component: TabBarPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'appareils',
        loadChildren: () =>
          import('../appareils/appareils.module').then(
            (m) => m.AppareilsPageModule
          ),
      },
      {
        path: 'single-appareil',
        loadChildren: () =>
          import('../single-appareil/single-appareil.module').then(
            (m) => m.SingleAppareilPageModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBarPageRoutingModule {}
