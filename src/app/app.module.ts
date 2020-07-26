import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideocaptionComponent } from './videocaption/videocaption.component';
import { DowncardsComponent } from './downcards/downcards.component';
import { FormsComponent } from './forms/forms.component';
import { FooterComponent } from './footer/footer.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideocaptionComponent,
    DowncardsComponent,
    FormsComponent,
    FooterComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
