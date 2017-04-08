import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {RemenComponent} from './remen.component';

const RemenRoutes : Routes = [
  {
    path: '',
    component: RemenComponent },
];
const RemenRouting = RouterModule.forChild(RemenRoutes)
@NgModule({
  imports: [ RemenRouting],
  exports: [ RouterModule ]
})
export class RemenRoutingModule { }