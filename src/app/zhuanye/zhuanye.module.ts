import { AdModule } from './../share/ad/ad.module';
import { NgModule,  }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import{ZhuanyeComponent} from './zhuanye.component';
import {ZhuanyeRoutingModule} from './zhuanye.routes';

@NgModule(
  {
    imports:[CommonModule,ZhuanyeRoutingModule,AdModule],
    declarations:[ZhuanyeComponent],
  }
)

export class ZhuanyeModule {

}
