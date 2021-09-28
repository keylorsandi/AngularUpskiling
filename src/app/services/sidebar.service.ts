import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      tittle: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { tittle: 'Main', url: '/' },
        { tittle: 'Progress', url: 'progress' },
        { tittle: 'Charts', url: 'grafic1' },
      ]
    }
  ]
  constructor() { }
}
