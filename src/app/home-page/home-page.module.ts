import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [HomeComponent, SidebarComponent, CarouselComponent],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
