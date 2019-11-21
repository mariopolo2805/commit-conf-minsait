import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './routes/welcome/welcome.component';
import { IngestionComponent } from './routes/ingestion/ingestion.component';
import { WinnerComponent } from './routes/winner/winner.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'ingestion', component: IngestionComponent },
  { path: 'winner', component: WinnerComponent },
  { path: '**', redirectTo: '/welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
