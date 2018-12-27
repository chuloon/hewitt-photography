import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PictureFrameComponent } from './picture-frame/picture-frame.component';

@NgModule({
  declarations: [PortfolioComponent, PictureFrameComponent],
  imports: [
    CommonModule
  ]
})
export class PortfolioPageModule { }
