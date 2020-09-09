import { Component, OnInit, Inject } from '@angular/core';
 import { DOCUMENT } from '@angular/common';
 // import { DOCUMENT } from '@angular/platform-browser';
 
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(public settingsService: SettingsService) { }

  ngOnInit(): void {
  }

  cambiarColor(colorTema:string){
    this.settingsService.aplicarTema(colorTema);
  }

}
