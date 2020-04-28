import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  constructor(public activeRoute:ActivatedRoute) { }

  results;
  hour;
  min;
  redeye;
  redeyeresults;
  day;
  days = ["today", "tommorow", "two days from now"];
  ampm;
  ngOnInit() {
    this.results = document.getElementById("results");
    this.redeyeresults = document.getElementById("redeyeresults");
    this.redeye = parseInt(this.activeRoute.snapshot.paramMap.get('redeye'));
    this.hour = parseInt(this.activeRoute.snapshot.paramMap.get('arrivalH'));
    this.min = parseInt(this.activeRoute.snapshot.paramMap.get('arrivalM'));
    this.day = parseInt(this.activeRoute.snapshot.paramMap.get('day'));
    //12 hour clock
    /*if(this.hour >= 12)
    {
      this.ampm = "pm";
      this.hour -= 12;
    }
    else
    {
      this.ampm = "am";
    }
    if(this.min < 10)
    {
      this.results.innerHTML = "You will arrive at " + this.hour + ":0" + this.min + " "  + this.ampm + " " + this.days[this.day];
    }
    else
    {
    this.results.innerHTML = "You will arrive at " + this.hour + ":" + this.min + " " + this.days[this.day];
    }*/
    if(this.min < 10)
    {
      this.min = "0" + this.min;
    }
    if(this.hour == 0)
    {
      this.hour = 24;
    }
    else if(this.hour < 10)
    {
      this.hour = "0" + this.hour;
    }
    this.results.innerHTML = "You will arrive at " + this.hour + ":" + this.min + " " + this.days[this.day];

    if(this.redeye == 1)
    {
      this.redeyeresults.innerHTML = "Red eye arrival!";
    }
  }

}
