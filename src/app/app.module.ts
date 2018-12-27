import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page.module';
import { PortfolioPageModule } from './portfolio-page/portfolio.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    PortfolioPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
