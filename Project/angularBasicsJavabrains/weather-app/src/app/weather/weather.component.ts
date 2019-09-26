import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports : [
    CommonModule,
    HttpClient
  ]
})

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})


export class WeatherComponent implements OnInit {
  nameofCity: string = "";
  response : any;
  response1 : any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.weatherInBudapest()
  }
  weatherInBudapest(){
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Budapest&units=metric&APPID=9275b72dd799e13720c39f8c455f8de2')
      .subscribe((response1) => {
        this.response1 = response1;
        //console.log(this.response);
      })
  }
  search() {
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.nameofCity + '&units=metric&APPID=9275b72dd799e13720c39f8c455f8de2' )
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      })
  }
}
