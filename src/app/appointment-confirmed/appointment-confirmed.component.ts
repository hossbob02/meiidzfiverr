import { Component, OnInit } from '@angular/core';
import { ResolutionService } from '../services/resolution.service';

@Component({
  selector: 'app-appointment-confirmed',
  templateUrl: './appointment-confirmed.component.html',
  styleUrls: ['./appointment-confirmed.component.css']
})
export class AppointmentConfirmedComponent implements OnInit {

  isMobileResolution:boolean
  constructor(private rs:ResolutionService) {
  if(this.rs.getIsMobileResolution()){
    this.isMobileResolution=true
  }else{
    this.isMobileResolution=false
  }
  }
  ngOnInit(): void {
  }

}
