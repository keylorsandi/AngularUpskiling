import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumsComponent } from './bread-crums/bread-crums.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BreadCrumsComponent,
    FooterComponent,
    HeaderComponent,
    SideBarComponent
  ],
  exports:[
    BreadCrumsComponent,
    FooterComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
