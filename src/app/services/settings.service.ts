import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private getLinkTheme = document.querySelector('#theme');
  constructor() {
    const urlTheme = localStorage.getItem('theme') || './assets/css/colors/green-dark.css';
    this.getLinkTheme?.setAttribute('href', urlTheme);
   }

   changeColor(theme: string): void {

    const urlTheme = `./assets/css/colors/${theme}.css`;
    this.getLinkTheme?.setAttribute('href', urlTheme);
    localStorage.setItem('theme', urlTheme);
    this.checkCurrentTheme();

  }

  checkCurrentTheme():void {
    const themeLink = document.querySelectorAll('.selector');

    themeLink.forEach(elem => {
      elem.classList.remove('working');
      const btnAtribute = elem.getAttribute('data-theme');
      const btnTheme = `./assets/css/colors/${btnAtribute}.css`;
      const currentTheme = this.getLinkTheme?.getAttribute('href');

      if (btnTheme === currentTheme) {
        elem.classList.add('working');
      }

    })
  }
}
