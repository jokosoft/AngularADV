import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() leyenda: string = 'Leyenda';
  @Input() doughnutChartLabels: Label[] = ['Uno', 'Dos', 'Tres'];
  @Input() doughnutChartData: MultiDataSet = [
    [10, 20, 30]
  ];
  @Input() doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
