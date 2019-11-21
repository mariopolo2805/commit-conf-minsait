import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { Person } from '../shared/person.model';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent implements OnInit {

  winner: Person = null;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.winner = this.appService.winner;
    this.appService.fadeIn();
    setTimeout(() => {
      this.appService.isLoading = false;
    }, 5000);
  }
}
