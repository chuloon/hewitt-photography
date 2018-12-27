import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture-frame',
  templateUrl: './picture-frame.component.html',
  styleUrls: ['./picture-frame.component.scss']
})
export class PictureFrameComponent implements OnInit {
  @Input() id: string;
  @Input() imageUrl: string[];

  constructor() { }

  ngOnInit() {
  }

}
