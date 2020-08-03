import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefountComponent } from './nopagefount/nopagefount.component';

const appRoutes: Routes = [
    // {path:'',component:PagesComponent,
    //     children:[
    //         {path:'dashboard',component:DashboradComponent},
    //         {path:'progress',component:ProgressComponent},
    //         {path:'graficas1',component:Graficas1Component},
    //         {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    //     ]
    // },   
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},  
    {path:'**',component:NopagefountComponent},
];


export const APP_ROUTES=RouterModule.forRoot(appRoutes,{useHash:true});