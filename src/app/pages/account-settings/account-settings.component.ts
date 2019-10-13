import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AjustesService } from 'src/app/services/ajustes/ajustes.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  // injecta el DOM DOCUMENT para poder trabajar con el dom a partir de una variable en toda la clase
  constructor( @Inject(DOCUMENT) private _document: HTMLDocument,
  private _ajustes: AjustesService ) { }

  ngOnInit() {
    this.colocarCheckTemaSeleccionadoPreferencias();
  }

  cambiarColor(tema: string, link: HTMLElement) {
    this.aplicarCheck(link);

    let url = `assets/css/colors/${ tema }.css`;

    let _ajuste: ajusteTemaDTO = {url: url, tema: tema};

    this._ajustes.guardarAjuste(_ajuste);
  }

  aplicarCheck(link: HTMLElement) {

    let selectores: any = this._document.getElementsByClassName('selector');

    for (let ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

  colocarCheckTemaSeleccionadoPreferencias() {

    let selectores: any = this._document.getElementsByClassName('selector');

    let temaPreferencias = this._ajustes._ajusteTemaDTO.tema;

    for (let ref of selectores) {
      if( temaPreferencias === ref.getAttribute('data-theme') ) {
        ref.classList.add('working');
        break;
      }

    }

  }

}
