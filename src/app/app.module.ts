import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SurveyComponent } from './survey/survey.component';
import { NotQualifiedComponent } from './not-qualified/not-qualified.component';
import { AppointmentConfirmedComponent } from './appointment-confirmed/appointment-confirmed.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SurveyComponent,
    NotQualifiedComponent,
    AppointmentConfirmedComponent,
    AppointmentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
