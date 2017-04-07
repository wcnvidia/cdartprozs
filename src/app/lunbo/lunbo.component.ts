import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ng2-bootstrap/carousel';

@Component({
  selector: 'app-lunbo',
  templateUrl: './lunbo.component.html',
  styleUrls: ['./lunbo.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}]
})
export class LunboComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
