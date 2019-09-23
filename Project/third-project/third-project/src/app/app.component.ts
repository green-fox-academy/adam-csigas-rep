import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//typescript basics
  constructor(private svc : TestService, private http: HttpClient){
    this.svc.printToConsole('Got the service');
  }

  ngOnInit(){
/*     let observable = this.http.get('https://api.github.com/users/koushikkothagal');
    observable.subscribe((response) => console.log(response)); */
  }

}
