import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule( {
  declarations: [ TopMenuComponent ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FontAwesomeModule
  ],
  exports: [ TopMenuComponent ]
} )
export class TopMenuModule {
}
