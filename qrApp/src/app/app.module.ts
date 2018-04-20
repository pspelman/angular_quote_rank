import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";

// import {AppComponent} from "../app.component";

import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';
import { AddComponent } from './add/add.component';
import {HttpService} from "./http.service";
import {AppComponent} from "./app.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthorComponent,
    AddComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
