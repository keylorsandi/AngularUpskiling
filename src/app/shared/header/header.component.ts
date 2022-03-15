import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../../services/logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private logoutS: LogoutService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.logoutS.logOut();
  }
}
