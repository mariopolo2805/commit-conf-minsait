import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { IngestionComponent } from './ingestion/ingestion.component';
import { WinnerComponent } from './winner/winner.component';
import { ConfettiComponent } from './confetti/confetti.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    IngestionComponent,
    WinnerComponent,
    ConfettiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
