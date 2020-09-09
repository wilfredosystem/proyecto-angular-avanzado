import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//RUTAS
import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTES } from './app.routes';

//MODULOS
import { PagesModule } from './pages/pages.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
// import { IncrementadorComponent } from './components/incrementador/incrementador.component';

//SERVICIOS
import { SettingsService } from './services/services.index';
import { ServiceModule } from './services/service.module';
//TEMPORAL
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    // IncrementadorComponent
    
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
