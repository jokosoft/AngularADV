import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AjustesService {

  public _ajusteTemaDTO: ajusteTemaDTO = {
    url: '',
    tema: ''
  };

  constructor() {
    this.cargarAjuste();
   }

  guardarAjuste(_ajuste: ajusteTemaDTO) {
    this._ajusteTemaDTO = _ajuste;
    localStorage.setItem('ajusteTema', JSON.stringify(_ajuste));
    this.establecerTemaPagina();
  }

  cargarAjuste() {
    this._ajusteTemaDTO = JSON.parse( localStorage.getItem('ajusteTema') );
    this.establecerTemaPagina();
  }

  establecerTemaPagina()
  {
    document.getElementById('tema').setAttribute('href', this._ajusteTemaDTO.url);
  }
}
