import { Injectable } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class HttpService {


  author_list: Array<any>;


  constructor() { }

  getAuthorList(){
    return this.author_list;

  }


}
