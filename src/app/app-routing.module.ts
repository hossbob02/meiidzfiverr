import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SurveyComponent } from './survey/survey.component';
import { AppointmentConfirmedComponent } from './appointment-confirmed/appointment-confirmed.component';
import { NotQualifiedComponent } from './not-qualified/not-qualified.component';
import { AppointmentComponent } from './appointment/appointment.component';


const routes: Routes = [
  {path:'getting-started',component:LandingComponent},
  { path: '',   redirectTo: '/getting-started', pathMatch: 'full' },
  {
    path:'getting-started',
  children: [
    {
      path: 'appointment-confirmed',
      component: AppointmentConfirmedComponent, 
    },
    {
      path: 'not-qualified',
      component: NotQualifiedComponent,
    },
    {
      path: 'appointment',
      component: AppointmentComponent,
    },
    {
      path:'survey',
      component:SurveyComponent
    }
    
  ],
  
},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
