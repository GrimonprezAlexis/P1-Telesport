import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { OlympicCountry } from 'src/app/core/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public chartData: { name: string; value: number }[] = [];
  public totalCountries = 0;
  public totalJO = 0;
  public isLoading = true;
  public isError = false;

  private readonly _destroy$ = new Subject<void>();

  constructor(
    private readonly _olympicService: OlympicService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this._olympicService
      .getOlympics()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (data: OlympicCountry[]) => {
          if (!data) this.isError = true;
          else {
            this.totalCountries = data.length;
            this.totalJO = data[0]?.participations.length ?? 0;
            this.chartData = this._buildChartData(data);
          }
          this.isLoading = false;
        },
        error: () => {
          this.isError = true;
          this.isLoading = false;
        },
      });
  }

  public onSelectCountry(event: { name: string }): void {
    const id = this._olympicService.getCountryIdByName(event.name);
    if (id !== undefined) this._router.navigate(['/country', id]);
    else console.error(`Country with name ${event.name} not found.`);
  }

  private _buildChartData(
    data: OlympicCountry[]
  ): { name: string; value: number }[] {
    return data.map(({ country, participations }) => ({
      name: country,
      value: participations.reduce((sum, p) => sum + p.medalsCount, 0),
    }));
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
