import { Component, OnInit } from '@angular/core';
import { BackgroundImageService } from '../services/background-image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public backgroundImageService: BackgroundImageService) { }

  ngOnInit() {
    this.backgroundImageService.changeBackgroundImage();
  }

}
