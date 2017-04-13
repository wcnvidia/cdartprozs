import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

export class Carousel {
  url: string;
}
const Carousels: Carousel[] = [
  { url: "http://i4.buimg.com/591259/aa4d7b20684f6cc7.jpg" },
  { url: "http://i4.buimg.com/591259/660918feeff000ee.jpg" },
  { url: "http://i4.buimg.com/591259/f268e79cbe4694b3.jpg" },
]
@Component({
  selector: 'app-fulunbo',
  templateUrl: './fulunbo.component.html',
  styleUrls: ['./fulunbo.component.css'],
  providers: [{ provide: CarouselConfig, useValue: { interval: 1500, noPause: true } }]
})
export class FulunboComponent implements OnInit {
  carousels = Carousels
  constructor() { }

  ngOnInit() {
  }

}
