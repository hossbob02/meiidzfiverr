import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }

  show(event){
    console.log(event)
    this.routes.navigate(['/getting-started/appointment-confirmed'])
  }
}
