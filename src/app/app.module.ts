import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './routes/welcome/welcome.component';
import { IngestionComponent } from './routes/ingestion/ingestion.component';
import { WinnerComponent } from './routes/winner/winner.component';
import { ConfettiComponent } from './confetti/confetti.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MediaComponent } from './media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    IngestionComponent,
    WinnerComponent,
    ConfettiComponent,
    NavbarComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
