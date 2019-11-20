import { Injectable } from '@angular/core';
import { Person } from '../shared/person.model';

@Injectable({
  providedIn: 'root'
})
export class WinnerService {

  winner: Person = null;

  constructor() { }
}
