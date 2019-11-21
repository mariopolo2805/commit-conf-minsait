import { Injectable } from '@angular/core';
import { Person } from '../shared/person.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  persons: Person[] = null;
  winner: Person = null;
  isLoading = true;

  constructor() { }

  fadeIn() {
    $('.card').hide();
    $('.card').removeClass('loaded');
    this.isLoading = true;
    setTimeout(() => {
      $('.card').show();
      $('.card').addClass('loaded');
    }, 500);
  }
}
