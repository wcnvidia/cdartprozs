
import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

export class Carousel{
  url:string
}
const Carousels:Carousel[]=[
  {url:"http://i1.piimg.com/567571/e2538e6480602512.jpg"},
  {url:"http://i1.piimg.com/567571/69139821f8f4d41c.jpg"},
  {url:"http://i2.muimg.com/567571/b5ba5b0a737c8e12.jpg"}
]
@Component({
  selector: 'app-zhulunbo',
  templateUrl: './zhulunbo.component.html',
  styleUrls: ['./zhulunbo.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}],
  
})
export class ZhulunboComponent implements OnInit {
  carousels=Carousels
  constructor() { }

  ngOnInit() {
  }

}
