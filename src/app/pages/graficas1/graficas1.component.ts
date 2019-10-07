import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  graficos: any = {
    'grafico1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
  };

  leyenda1;
  doughnutChartLabels1;
  doughnutChartData1 ;
  doughnutChartType1;

  leyenda2;
  doughnutChartLabels2;
  doughnutChartData2;
  doughnutChartType2;

  leyenda3;
  doughnutChartLabels3;
  doughnutChartData3;
  doughnutChartType3;

  leyenda4;
  doughnutChartLabels4;
  doughnutChartData4;
  doughnutChartType4;

  constructor() {
   }

  ngOnInit() {
    this.cargaGrafica1(this.graficos['grafico1']);
    this.cargaGrafica2(this.graficos['grafico2']);
    this.cargaGrafica3(this.graficos['grafico3']);
    this.cargaGrafica4(this.graficos['grafico4']);
  }

  cargaGrafica1(data: any) {
    this.leyenda1 = data.leyenda;
    this.doughnutChartLabels1 = data.labels;
    this.doughnutChartData1 = data.data;
    this.doughnutChartType1 = data.type;
  }

  cargaGrafica2(data: any) {
    this.leyenda2 = data.leyenda;
    this.doughnutChartLabels2 = data.labels;
    this.doughnutChartData2 = data.data;
    this.doughnutChartType2 = data.type;
  }

  cargaGrafica3(data: any) {
    this.leyenda3 = data.leyenda;
    this.doughnutChartLabels3 = data.labels;
    this.doughnutChartData3 = data.data;
    this.doughnutChartType3 = data.type;
  }

  cargaGrafica4(data: any) {
    this.leyenda4 = data.leyenda;
    this.doughnutChartLabels4 = data.labels;
    this.doughnutChartData4 = data.data;
    this.doughnutChartType4 = data.type;
  }

}
