import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import {ZhulunboComponent} from './zhulunbo.component';
import {ZhulunboRoutingModule} from './zhulunbo.routes'

@NgModule(
  {
    imports:[CommonModule,CarouselModule.forRoot(),ZhulunboRoutingModule ],
    declarations:[ZhulunboComponent],
  }
)
export class ZhulunboModule {

}
