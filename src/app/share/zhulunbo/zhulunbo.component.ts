import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ng2-bootstrap/carousel';

@Component({
  selector: 'app-zhulunbo',
  templateUrl: './zhulunbo.component.html',
  styleUrls: ['./zhulunbo.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}]
})
export class ZhulunboComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
