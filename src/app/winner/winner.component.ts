import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent implements OnInit {
  public name: string;
  public id: number;
  public encrytpEmail: string;

  constructor() { }

  ngOnInit() {
    this.name = 'Juan García Pérez';
    this.id = 5;

  }
}
