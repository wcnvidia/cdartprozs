import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {DongtaiComponent} from './dongtai.component';
import {DongtaiRoutingModule} from './dongtai.routes';


@NgModule(
  {
    imports:[CommonModule,DongtaiRoutingModule,],
    declarations:[DongtaiComponent],
  }
)
export class DongtaiModule {

}
