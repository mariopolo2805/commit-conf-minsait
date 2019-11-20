import { Component, OnInit } from '@angular/core';
import { WinnerService } from '../shared/winner.service';
import { Person } from '../shared/person.model';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent implements OnInit {

  winner: Person = null;
  isLoading = true;

  constructor(private winnerService: WinnerService) { }

  ngOnInit() {
    this.winner = this.winnerService.winner;
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }
}
