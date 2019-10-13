import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AjustesService,
  SharedService,
  SidebarService
} from './services.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AjustesService,
    SharedService,
    SidebarService
  ]
})
export class ServicesModule { }
