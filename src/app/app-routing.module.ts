import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { Grafic1Component } from './pages/grafic1/grafic1.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [
  { path:'', component:PagesComponent },
  { path:'dashboard', component: DashBoardComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },

  { path:'progress', component: ProgressComponent },
  { path:'grafic1', component: Grafic1Component },
  //{ path:'', redirectTo:'/dashboard',pathMatch: 'full' },


  { path:'**', component: NotPageFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
