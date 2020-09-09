import { Component } from '@angular/core';
import { SettingsService } from './services/services.index';
// import { SettingsService } from './services/settings/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //WHR-NOTA: dado que este componente se carga inicialmente
  //agregamos el constructor para que haga referencia al servicio
  //SettingsService y tb dispare su constructor el cual tiene el metodo que carga
  //el localstorage 
  constructor(public settingsService:SettingsService){}
}
