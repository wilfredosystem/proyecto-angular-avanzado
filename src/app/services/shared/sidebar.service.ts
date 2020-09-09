import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any=[
    {
      titulo:'principal',
      icono:'mdi mdi-gauge',
      submenu:[
        {titulo:'dashboard', url:'/dashboard'},
        {titulo:'progressbar', url:'/progress'},
        {titulo:'graficas', url:'/graficas1'},
      ]

    }
  ]
  constructor() { }
}
