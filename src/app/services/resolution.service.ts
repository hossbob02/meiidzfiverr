import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolutionService {

  isMobileResolution:boolean;
  constructor() {
    if(window.innerWidth<786){
      this.isMobileResolution=true
   }else{
     this.isMobileResolution=false
   }
   }
   public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }
}
