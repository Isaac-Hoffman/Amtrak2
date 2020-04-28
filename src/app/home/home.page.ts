import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  hours;
  minutes;
  duration;
  durHours;
  durMins;
  arrivalH;
  arrivalM;
  day;
  redeye;
  one;
  two;
  three;
  hrs;
  mins;
  mindur;
  
  constructor(public router:Router) {}
  submitted(){
    this.day = 0;
    this.hrs = document.getElementById("hrs");
    this.mins = document.getElementById("mins");
    this.mindur = document.getElementById("mindur");
    this.hrs = document.getElementById("hrs");
    this.mins = document.getElementById("mins");
    this.mindur = document.getElementById("mindur");
    if(this.hours == null || this.hours > 23 || this.hours < 0)
    {
      this.hrs.style.backgroundColor = "#680000";
      this.hrs.style.opacity = "0.8";
      this.hrs.value = "";
      this.one = false;
    }
    else
    {
      this.hrs.style.backgroundColor = "#000000";
      this.hrs.style.opacity = "0.5";
      this.one = true;
    }
    if(this.minutes == null || this.minutes > 59 || this.minutes < 0)
    {
      this.mins.style.backgroundColor = "#680000";
      this.mins.style.opacity = "0.8";
      this.mins.value = "";
      this.two = false;
    }
    else
    {
      this.mins.style.backgroundColor = "#000000";
      this.mins.style.opacity = "0.5";
      this.two = true;
    }
    if(this.duration == null || this.duration > 1500 || this.duration < 0)
    {
      this.mindur.style.backgroundColor = "#680000";
      this.mindur.style.opacity = "0.8";
      this.mindur.value = "";
      this.three = false;
    }
    else
    {
      this.mindur.style.backgroundColor = "#000000";
      this.mindur.style.opacity = "0.5";
      this.three = true;
    }
    if(this.one && this.two && this.three)
    {
      this.durMins = this.duration + this.minutes;
      if(this.durMins >= 60)
      {      
        this.durHours = (Math.floor(this.durMins / 60));
        this.durMins = this.durMins % 60;
        this.arrivalH = this.durHours + this.hours;
      }
      else
      {
        this.arrivalH = this.hours;
      }
      if(this.arrivalH == 24)
      {
        this.day = 1;
      }
      else if(this.arrivalH >= 25)
      {
        if(this.hours + this.durHours > 48 || (this.hours + this.durHours == 48 && this.durMins > 0))
        {
          this.arrivalH -= 48;
          this.day = 2;
        }
        else
        {
          this.arrivalH -= 24;
          this.day = 1;
        }
      }
      this.arrivalM = this.durMins;
      if(this.arrivalH <= 6)
      {
        this.redeye = 1;
      }
      else
      {
        this.redeye = 0;
      }
      console.log(this.day);
      this.router.navigate(['results', this.arrivalH, this.arrivalM, this.redeye, this.day]);
    }
    
  }
}
