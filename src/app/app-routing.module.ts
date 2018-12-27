import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import { PortfolioComponent } from './portfolio-page/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio/:category', component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
