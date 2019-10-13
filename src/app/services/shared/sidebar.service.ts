import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Dashboard', url: '/dashboard'},
        {titulo: 'Progress Bar', url: '/progress'},
        {titulo: 'Gráficas', url: '/grafica1'},
        {titulo: 'Autocomplete', url: '/autocomplete'}
      ]

    }
  ]

  constructor() { }
}
