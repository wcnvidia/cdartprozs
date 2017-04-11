import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {TsZhuanyeComponent} from './ts-zhuanye.component';

const TsZhuanyeRoutes : Routes = [
  {
    path: '',
    component: TsZhuanyeComponent,
    
  },
];
const TsZhuanyeRouting = RouterModule.forChild(TsZhuanyeRoutes)
@NgModule({
  imports: [ TsZhuanyeRouting],
  exports: [ RouterModule ]
})
export class TsZhuanyeRoutingModule { }