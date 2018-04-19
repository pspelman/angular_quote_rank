import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from "../http.service";


//this is a child class
//this can use @Output to send info back to the parent

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  template: `
  <h1> Hello there, {{name}}</h1>
  `,
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input()
  public parentData;

  constructor(private _httpService: HttpService) { }


  ngOnInit() {
  //TODO: show list of selected author's quotes

  }

  //TODO: send buttons to the template

  //TODO: send edit button events to see the updated edit page

  //TODO: send "add quote" event to the new quote addition page, AUTO populate with name (not editable)

  //TODO: allow user to delete any of the author's quotes

}
