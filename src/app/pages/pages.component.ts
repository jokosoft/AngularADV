import { Component, OnInit } from '@angular/core';
import { AjustesService } from '../services/ajustes/ajustes.service';

declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor(_ajustes: AjustesService) { }

  ngOnInit() {
    init_plugins();
  }

}
