import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  //TODO: create the html service
  constructor(private _httpService: HttpService) { }

  ngOnInit() {

    //TODO: add author

    //TODO: add quote for an author

  }

}
