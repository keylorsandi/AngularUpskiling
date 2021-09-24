import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafic1Component } from './grafic1/grafic1.component';
import { DashBoardComponent } from './dash-board/dash-board.component';


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
    FormsModule,
    RouterModule,
    ComponentsModule,
    SharedModule
  ]
})
export class PagesModule { }
