import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, finalize, map, take, tap } from 'rxjs/operators';
import { ChartData, OlympicCountry } from 'src/app/core/models';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent implements OnInit {
  public country?: OlympicCountry;
  public chartData: ChartData[] = [];
  public totalMedals = 0;
  public totalAthletes = 0;
  public isLoading = true;
  public isError = false;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _olympicService: OlympicService
  ) {}

  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    if (isNaN(id)) {
      this.isError = true;
      this.isLoading = false;
      return;
    }

    this._olympicService
      .getOlympics()
      .pipe(
        take(1),
        map((data) => data?.find((c) => c.id === id)),
        tap((country) => {
          if (!country) throw new Error();
          this.country = country;
          this.totalMedals = country.participations.reduce(
            (s, p) => s + p.medalsCount,
            0
          );
          this.totalAthletes = country.participations.reduce(
            (s, p) => s + p.athleteCount,
            0
          );
          this.chartData = country.participations.map((p) => ({
            name: p.year.toString(),
            value: p.medalsCount,
          }));
        }),
        catchError(() => {
          this.isError = true;
          return of(null);
        }),
        finalize(() => (this.isLoading = false))
      )
      .subscribe();
  }

  public goBack(): void {
    this._router.navigate(['/']);
  }
}
