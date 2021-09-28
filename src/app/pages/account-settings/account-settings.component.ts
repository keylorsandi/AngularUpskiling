import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  constructor(public settingsServ: SettingsService) {}

  ngOnInit(): void {
    this.settingsServ.checkCurrentTheme();
  }

  changeColor(theme: string): void {

    this.settingsServ.changeColor(theme);

  }

}
