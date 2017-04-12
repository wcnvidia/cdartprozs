import { JpZhuanyeComponent } from './jp-zhuanye.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JpZhuanyeRoutingModule } from './jp-zhuanye.routes';


@NgModule(
  {
    imports: [CommonModule, JpZhuanyeRoutingModule,CollapseModule.forRoot()],
    declarations: [JpZhuanyeComponent],
  }
)
export class JpZhuanyeModule {

}