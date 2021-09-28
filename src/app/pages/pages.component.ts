import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

// le digo a TS que tengo esta funcion de manera global y que la puede utilizar
declare function initCustomFuntion():void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(public settingsServ: SettingsService) { }

  ngOnInit(): void {
    initCustomFuntion();
  }

}
