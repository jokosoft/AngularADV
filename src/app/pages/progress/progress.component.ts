import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})

export class ProgressComponent implements OnInit {

porcentaje1: number = 45;
porcentaje2: number = 55;

  constructor() { }

  ngOnInit() {
  }

  actualizar1(valor: number) {
    this.porcentaje1 = valor;
  }

}
