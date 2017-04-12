import { TsZhuanyeComponent } from './ts-zhuanye.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TsZhuanyeRoutingModule } from './ts-zhuanye.routes';


@NgModule(
  {
    imports: [CommonModule, TsZhuanyeRoutingModule,],
    declarations: [TsZhuanyeComponent],
  }
)
export class TsZhuanyeModule {

}