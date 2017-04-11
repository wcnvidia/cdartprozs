import { JpZhuanyeComponent } from './jp-zhuanye.component';
import { AdModule } from './../share/ad/ad.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JpZhuanyeRoutingModule } from './jp-zhuanye.routes';


@NgModule(
  {
    imports: [CommonModule, JpZhuanyeRoutingModule,],
    declarations: [JpZhuanyeComponent],
  }
)
export class JpZhuanyeModule {

}