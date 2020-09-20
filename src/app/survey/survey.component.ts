import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {


  valueradio:''  
  dataForm={
    form1:'',
    form2:'none',
    form3:'none',
    form4:'none',
    form5:'none',
    form6:'none',
    form7:'none'
  }

  datasurvey={
    ownhome:'',
    average:'',
    creditScore:'',
    address:'',
    email:'',
    area:'',
    phone:''

  }
  dataRequered={
    messageErrform1:'',
    messageErrform2:'',
    messageErrform3:'',
    messageErrName:'',
    messageErrLast:'',
    messageErrAddress:'',
    messageErrEmail:'',
    messageErrArea:'',
    messageErrPhone:''
  }
  
    firstname:String
    lastname:String
  
  constructor(private routes:Router) {


   }

  ngOnInit(): void {
  }

  handleradioform1(event){
    console.log(event)
    if(event=='no'){
      this.routes.navigate(['/getting-started/not-qualified'])
    }
    else{
      this.datasurvey.ownhome=event
      this.dataForm.form1='none'
    this.dataForm.form2=''
    }
  }
  next1(){
    if(this.datasurvey.ownhome=='')
    {
      this.dataRequered.messageErrform1='Choose Yes Or No'
    }else{
      this.dataForm.form1='none'
      this.dataForm.form2=''
    }
  
  }
  redirectto(){
    this.routes.navigate(['/getting-started'])
  }
  handleradioform2(event){
    this.datasurvey.average=event
    this.dataForm.form2='none'
    this.dataForm.form3=''
  }
  next2(){
    if(this.datasurvey.average==''){
      this.dataRequered.messageErrform2='Choose Average'
    }else{
      this.dataForm.form2='none'
      this.dataForm.form3=''
    }
  }
  redirectto2(){
    this.dataForm.form2='none'
    this.dataForm.form1=''
  }
  handleradioform3(event){
    this.datasurvey.creditScore=event
    this.dataForm.form3='none',
    this.dataForm.form4=''
  }
  next3(){
    if(this.datasurvey.creditScore==''){
      this.dataRequered.messageErrform3='Average Is Required'
    }else{
      this.dataForm.form3='none',
    this.dataForm.form4=''
    }
  }
  redirectto3(){
    this.dataForm.form3='none',
    this.dataForm.form2=''
  }

  handleTestName(event){
    this.firstname=event
  }
  handleTestLast(event){
    this.lastname=event
  }
  next4(){
    if((this.firstname=='') || (this.lastname==''))
    {
      this.dataRequered.messageErrName='firstName Is Required'
      this.dataRequered.messageErrLast='lastName Is Required'

    }  
    else{
      this.dataForm.form4='none'
      this.dataForm.form5=''
    }
  }
  redirectto4(){
    this.dataForm.form4='none',
    this.dataForm.form3=''
  }
  handleTestaddress(event){
    this.datasurvey.address=event
  }

  next5(){
    if(this.datasurvey.address==''){
      this.dataRequered.messageErrAddress='Address Is Required'
    }else{
      this.dataForm.form5='none'
      this.dataForm.form6=''
    }
  }
  redirectto5(){
    this.dataForm.form5='none',
    this.dataForm.form4=''
  }
  handleTestEmail(event){
    this.datasurvey.email=event
  }
  next6(){
    if(this.datasurvey.email==''){
      this.dataRequered.messageErrEmail='Email Is Required'
    }
    else{
      this.dataForm.form6='none',
      this.dataForm.form7=''
    }
  }
  redirectto6(){
    this.dataForm.form6='none',
    this.dataForm.form5=''
  }
  handleTestArea(event){
    this.datasurvey.area=event
  }
  handleTestPhone(event){
    this.datasurvey.phone=event
  }
  next7(){
    if((this.datasurvey.area=='') || (this.datasurvey.phone==''))
    {
      this.dataRequered.messageErrArea='Area Code Is Required'
      this.dataRequered.messageErrPhone='Phone Is Required'
    }
    else{
     console.log('ownhome= '+this.datasurvey.ownhome)
      console.log(' average= '+this.datasurvey.average)
      console.log(' creditscore= '+this.datasurvey.creditScore)
      console.log('firstname and lastname= '+this.firstname+' '+this.lastname)
      console.log('address= '+this.datasurvey.address)
      console.log('email= '+this.datasurvey.email)
      console.log('area and phone' +this.datasurvey.area+' '+this.datasurvey.phone)
     this.routes.navigate(['/getting-started/appointment'])
    }
  }
  redirectto7(){
    this.dataForm.form7='none'
    this.dataForm.form6=''
  }
}
