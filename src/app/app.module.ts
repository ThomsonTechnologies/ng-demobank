import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CreditcardsComponent } from './creditcards/creditcards.component';
import { BankingComponent } from './banking/banking.component';
import { HomeComponent } from './home/home.component';
import { NewAccountComponent } from './new-account/new-account.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'creditcards', component: CreditcardsComponent },
  { path: 'banking', component: BankingComponent },
  { path: 'newaccount', component: NewAccountComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    CreditcardsComponent,
    BankingComponent,
    HomeComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
