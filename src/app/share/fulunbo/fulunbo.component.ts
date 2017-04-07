import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ng2-bootstrap/carousel';
@Component({
  selector: 'app-fulunbo',
  templateUrl: './fulunbo.component.html',
  styleUrls: ['./fulunbo.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}]
})
export class FulunboComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
