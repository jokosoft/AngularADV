import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', null) txtProgress: ElementRef;

  // tslint:disable-next-line: no-input-rename
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 25;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  cambiarValor( valor: number ) {
    this.porcentaje = this.porcentaje + valor;
    this.gestionValor(this.porcentaje);
  }

  onChange( event ) {

    // let inputHTML: any = document.getElementsByName('porcentaje')[0];
    // console.log(this.txtProgress.nativeElement.value);

    this.gestionValor(event);

    this.txtProgress.nativeElement.value = this.porcentaje;

    // inputHTML.value = this.porcentaje;
  }

  gestionValor(valor: number){
    if ( this.porcentaje > 100 ) {
      this.porcentaje = 100;
    } else if ( this.porcentaje < 0 ) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = valor;
    }

    // emite el evento al padre del componente
    this.cambioValor.emit(this.porcentaje);

    // establece el foco en el elmento referenciado
    this.txtProgress.nativeElement.focus();
  }
}
