import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  constructor() { }


  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
        display: true,
        text: 'Tiempo por categoría',
        fontSize: 16,
        fontFamily: 'Quicksand'
    },
    legend: {
        position: 'bottom',
    },
    scales: {
        yAxes: [{
            ticks: {
                suggestedMin: 0
            }
        }]
    }
  };
  barChartLabels = ['Semestre i', 'Personal', 'Extracurricular'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [
    {data: [7, 12, 2], label: 'Cateogoría'}
  ];

}
