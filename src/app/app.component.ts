import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { OlympicService } from './core/services/olympic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly _destroy$ = new Subject<void>();

  constructor(private readonly _olympicService: OlympicService) {}

  ngOnInit(): void {
    this._olympicService
      .loadInitialData()
      .pipe(takeUntil(this._destroy$))
      .subscribe();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
