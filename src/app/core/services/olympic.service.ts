import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { OlympicCountry } from '../models';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private readonly _olympicUrl = './assets/mock/olympic.json';
  private readonly _olympics$ = new BehaviorSubject<OlympicCountry[]>([]);

  constructor(private readonly _http: HttpClient) {}

  /**
   * Charge les données initiales depuis le fichier JSON
   * Stocke les données dans le BehaviorSubject pour partage
   */
  loadInitialData(): Observable<OlympicCountry[]> {
    return this._http.get<OlympicCountry[]>(this._olympicUrl).pipe(
      tap((data: OlympicCountry[]) => this._olympics$.next(data)),
      catchError((error) => {
        console.error(
          'Erreur lors du chargement des données olympiques :',
          error
        );
        this._olympics$.next([]);
        return of([]);
      })
    );
  }

  /**
   * Récupère l'observable des données olympiques
   */
  getOlympics(): Observable<OlympicCountry[]> {
    return this._olympics$.asObservable();
  }

  /**
   * Optionnel : Méthode utilitaire pour retrouver un pays par ID
   */
  getCountryById(id: number): OlympicCountry | undefined {
    return this._olympics$.value?.find((c) => c.id === id);
  }

  /**
   * Optionnel : Méthode utilitaire pour retrouver un ID de pays par nom
   */
  getCountryIdByName(name: string): number | undefined {
    return this._olympics$.value?.find((c) => c.country === name)?.id;
  }
}
