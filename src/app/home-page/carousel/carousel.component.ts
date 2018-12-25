import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  carouselItems = [
    "/assets/images/carousel-images/carousel-0.jpg",
    "/assets/images/carousel-images/carousel-0.jpg",
    "/assets/images/carousel-images/carousel-0.jpg",
  ];

  constructor() { }

  ngOnInit() {
  }

}
