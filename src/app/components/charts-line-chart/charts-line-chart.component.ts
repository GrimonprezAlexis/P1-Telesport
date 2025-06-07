import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'src/app/core/models';

@Component({
  selector: 'app-charts-line-chart',
  templateUrl: './charts-line-chart.component.html',
  styleUrls: ['./charts-line-chart.component.scss'],
})
export class ChartsLineChartComponent implements OnInit {
  @Input({ required: true }) data: { name: string; series: ChartData[] }[] = [];

  constructor() {}

  ngOnInit() {}
}
