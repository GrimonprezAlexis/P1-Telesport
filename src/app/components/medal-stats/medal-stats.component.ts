import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medal-stats',
  templateUrl: './medal-stats.component.html',
  styleUrls: ['./medal-stats.component.scss'],
})
export class MedalStatsComponent implements OnInit {
  @Input() title = '';
  @Input() stats: { label: string; value: number | string }[] = [];

  constructor() {}

  ngOnInit() {}
}
