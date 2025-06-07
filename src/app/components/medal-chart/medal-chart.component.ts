import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-medal-chart',
  templateUrl: './medal-chart.component.html',
  styleUrls: ['./medal-chart.component.scss'],
})
export class MedalChartComponent implements OnInit {
  @Input() chartData: { name: string; value: number }[] = [];
  @Output() selectCountry = new EventEmitter<{ name: string }>();

  constructor() {}

  ngOnInit() {}

  public onSelectCountry(event: { name: string }): void {
    this.selectCountry.emit(event);
  }
}
