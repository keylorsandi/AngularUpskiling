import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { DashBoardComponent } from './dash-board/dash-board.component';
import { Grafic1Component } from './grafic1/grafic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate:[AuthGuard],
    children: [
      { path: '', component: DashBoardComponent, data:{title:'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data:{title:'Progres'} },
      { path: 'grafic1', component: Grafic1Component, data:{title:'Charts'} },
      { path: 'promises', component: PromisesComponent, data:{title:'Promises'} },
      { path: 'rxjs', component: RxjsComponent, data:{title:'Rxjs'} },
      { path: 'account-settings', component: AccountSettingsComponent, data:{title:'Account Settings'} }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
