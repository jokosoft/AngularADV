import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  // injecta el DOM DOCUMENT para poder trabajar con el dom a partir de una variable en toda la clase
  constructor( @Inject(DOCUMENT) private _document: HTMLDocument ) { }

  ngOnInit() {
  }

  cambiarColor(tema: string, link: HTMLElement) {
    this.aplicarCheck(link);

    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);
  }

  aplicarCheck(link: HTMLElement) {

    let selectores: HTMLElement[] = this._document.getElementsByClassName('selector');

    for (let ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

}
