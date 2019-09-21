import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.markup.html', //static
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {//dynamic part

  dateMessage : string;
  someNumber : number = 10;

  constructor() {

    setInterval(() =>{ //there is 2 setinterval one is ok here, the other cause error
      let currentDate = new Date();
      this.dateMessage = `${currentDate.toDateString()} ${currentDate.toLocaleTimeString()}`;
    },1000);

   }

  ngOnInit() {
  }

  addTwoNumbers(a : number,b : number) : number {
    return a+b;
  }
}
