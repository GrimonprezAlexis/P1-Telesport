import { Participation } from './Participation';

export interface OlympicCountry {
  id: number; // 1
  country: string; // "Italy"
  participations: Participation[]; // []
}
