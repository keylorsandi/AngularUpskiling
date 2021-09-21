import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BreadCrumsComponent } from './shared/bread-crums/bread-crums.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafic1Component } from './pages/grafic1/grafic1.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotPageFoundComponent,
    DashBoardComponent,
    HeaderComponent,
    FooterComponent,
    BreadCrumsComponent,
    SideBarComponent,
    ProgressComponent,
    Grafic1Component,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
