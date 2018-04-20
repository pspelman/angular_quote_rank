import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//need to import all of the components
import {HomeComponent} from "./home/home.component";
import {AuthorComponent} from "./author/author.component";
import {AddComponent} from "./add/add.component";


const routes: Routes = [
  // {path: 'home', component: HomeComponent},
  {path: 'home', pathMatch: 'full', redirectTo: ''},
  {path: 'author', component: AuthorComponent},
  {path: 'add', component: AddComponent},
  // {path: '/ledger', pathMatch: 'full', redirectTo:'ledger'},
  // {path: '', pathMatch: 'full', redirectTo: '/home'},
  // {path: '/home', pathMatch: 'full', redirectTo: '/home'},
  {path: '**', component: HomeComponent},
  {path: '', component: HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
