import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import {RemenComponent} from './remen.component';
import {RemenRoutingModule} from './remen.routes'

@NgModule(
  {
    imports:[CommonModule,CarouselModule.forRoot(),RemenRoutingModule ],
    declarations:[RemenComponent],
  }
)
export class RemenModule {

}