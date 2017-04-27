import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

export class Carousel {
  url: string;
}
const Carousels: Carousel[] = [
  { url: "http://i2.muimg.com/591259/af31df48dae7e4cc.jpg" },
  { url: "http://i2.muimg.com/591259/f1328c781696ad43.jpg" },
  { url: "http://i2.muimg.com/591259/cbdcdb888987b420.jpg" },
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
