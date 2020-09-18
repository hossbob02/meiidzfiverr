import { Component, OnInit } from '@angular/core';
import { ResolutionService } from '../services/resolution.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-qualified',
  templateUrl: './not-qualified.component.html',
  styleUrls: ['./not-qualified.component.css']
})
export class NotQualifiedComponent implements OnInit {

  isMobileResolution:boolean
  constructor(private rs:ResolutionService,private routes:Router) {
    if(this.rs.isMobileResolution){
      this.isMobileResolution=true
    }else{
      this.isMobileResolution=false
    }
   }

  ngOnInit(): void {
  }
  go(){
    this.routes.navigate(['/getting-started/survey'])
  }

}
