import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { ResolutionService } from '../services/resolution.service';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
 
 
  data={
    date:'',
    time:''
  }

  isMobileResolution:boolean
  dataMessage={
    timeErr:'',
    dateErr:''
  }
    d = new Date();
  dataDay={
    day1:'',
    day2:'',
    day3:'',
    day4:'',
    day5:'',
  }
  nameDay={
    day1:'',
    day2:'',
    day3:'',
    day4:'',
    day5:''
  }
  constructor(private routes:Router,private rs:ResolutionService) { 
    if(this.rs.getIsMobileResolution()){
      this.isMobileResolution=true
    }else{
      this.isMobileResolution=false
    }
   
    
  }

  
  ngOnInit(): void {
    
    let today=new Date();
    let tomorrow1=new Date();
    let tomorrow2=new Date();
    let tomorrow3=new Date();
    let tomorrow4=new Date();
    let monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    let DaysNames = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    today.setDate(today.getDate())
    tomorrow1.setDate(tomorrow1.getDate()+1)
    tomorrow2.setDate(tomorrow2.getDate()+2)
    tomorrow3.setDate(tomorrow3.getDate()+3)
    tomorrow4.setDate(tomorrow4.getDate()+4)
    tomorrow4.getDay()
    //console.log(tomorrow1.getDate())
    //console.log(monthNames[tomorrow1.getMonth()])
    this.dataDay.day1=today.getDate()+' '+monthNames[today.getMonth()]
    this.nameDay.day1=DaysNames[today.getDay()]
    this.dataDay.day2=tomorrow1.getDate()+' '+monthNames[tomorrow1.getMonth()]
    this.nameDay.day2=DaysNames[tomorrow1.getDay()]
    this.dataDay.day3=tomorrow2.getDate()+' '+monthNames[tomorrow2.getMonth()]
    this.nameDay.day3=DaysNames[tomorrow2.getDay()]
    this.dataDay.day4=tomorrow3.getDate()+' '+monthNames[tomorrow3.getMonth()]
    this.nameDay.day4=DaysNames[tomorrow3.getDay()]
    this.dataDay.day5=tomorrow4.getDate()+' '+monthNames[tomorrow4.getMonth()]
    this.nameDay.day5=DaysNames[tomorrow4.getDay()]
  }
  get(){
  console.log(this.data.date)
  }
  getTime(event){
    this.data.time=event
    console.log(this.data.time)
  }

  verrifandgo(){
    if((this.data.time=='') || (this.data.date=='')){
      this.dataMessage.dateErr='Date is Required'
      this.dataMessage.timeErr='Time is Required'
    }else{
      console.log(this.data.date)
      console.log(this.data.time)
      this.routes.navigate(['/getting-started/appointment-confirmed'])
    }
  }
  show(event){
    console.log(event)
    this.routes.navigate(['/getting-started/appointment-confirmed'])
  }
}
