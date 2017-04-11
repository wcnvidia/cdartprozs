import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {JpZhuanyeComponent} from './jp-zhuanye.component';

const JpZhuanyeRoutes : Routes = [
  {
    path: '',
    component: JpZhuanyeComponent,
    
  },
];
const JpZhuanyeRouting = RouterModule.forChild(JpZhuanyeRoutes)
@NgModule({
  imports: [ JpZhuanyeRouting],
  exports: [ RouterModule ]
})
export class JpZhuanyeRoutingModule { }
