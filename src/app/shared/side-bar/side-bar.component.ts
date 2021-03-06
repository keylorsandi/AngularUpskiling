import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { LogoutService } from '../../services/logout.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public menuItems:any[];

  constructor(private sidebarServ: SidebarService,
              private logOutS:LogoutService) {
    this.menuItems = sidebarServ.menu;
   }

  ngOnInit(): void {
  }

  logOut(){
    this.logOutS.logOut();
  }

}
