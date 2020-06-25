import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboradComponent } from './pages/dashborad/dashborad.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefountComponent } from './nopagefount/nopagefount.component';


const routes: Routes = [
  {path:'',component:PagesComponent,
        children:[
            {path:'dashboard',component:DashboradComponent},
            {path:'progress',component:ProgressComponent},
            {path:'graficas1',component:Graficas1Component},
            {path:'',redirectTo:'/dashboard',pathMatch:'full'},
        ]
    },   
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},  
    {path:'**',component:NopagefountComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
