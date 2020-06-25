import { NgModule } from '@angular/core';

import { NopagefountComponent } from '../nopagefount/nopagefount.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    NopagefountComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent

  ],
  exports: [
    NopagefountComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
