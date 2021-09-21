import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafic1Component } from './grafic1/grafic1.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PagesComponent,
    ProgressComponent,
    Grafic1Component,
    DashBoardComponent
  ],
  exports:[
    PagesComponent,
    ProgressComponent,
    Grafic1Component,
    DashBoardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
