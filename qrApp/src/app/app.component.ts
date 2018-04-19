import { Component, Input, Output, OnInit } from '@angular/core';
import {HttpService} from "./http.service";


//this is the parent component
//can use @

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 //
 //  template:`
 //    <h1>Silly Template</h1>
 //    <h3>{{name}}</h3>
 // <ul *ngFor="author of authors">
 //    {{ author.name }}
 //    </ul>\`

  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _httpService: HttpService) {

  }

  title = 'AuthorQuotes';
  public name = "Vicious";

  ngOnInit(): void {
    //todo: Get a list of all the authors
  }
}
