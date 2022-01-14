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
        { tittle: 'Main', url: '/dashboard' },
        { tittle: 'Progress', url: 'progress' },
        { tittle: 'Charts', url: 'grafic1' },
        { tittle: 'Promises', url: 'promises' },
        { tittle: 'Rxjs', url: 'rxjs' },
      ]
    }
  ]
  constructor() { }
}
