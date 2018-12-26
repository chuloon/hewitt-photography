import { Component, OnInit } from '@angular/core';
import { BackgroundImageService } from '../services/background-image.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor(public backgroundImageService: BackgroundImageService) { }

  ngOnInit() {
  }

  setBackgroundImage = (link) => {
    clearTimeout(this.backgroundImageService.changeTimer);
    this.backgroundImageService.url = link;

    this.backgroundImageService.changeBackgroundImage();
  }

}
