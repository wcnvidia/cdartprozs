import { ZhuanyeListModule } from './../share/zhuanye-list/zhuanye-list.module';
import { JpZhuanyeComponent } from './jp-zhuanye.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JpZhuanyeRoutingModule } from './jp-zhuanye.routes';


@NgModule(
  {
    imports: [CommonModule, JpZhuanyeRoutingModule,ZhuanyeListModule],
    declarations: [JpZhuanyeComponent],
  }
)
export class JpZhuanyeModule {

}