import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/services/app.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.appService.fadeIn();
  }
}
