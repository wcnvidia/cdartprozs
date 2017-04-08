import { NgModule,  }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import{LianxiComponent} from './lianxi.component';
import {LianxiRoutingModule} from './Lianxi.routes';
import {BaiduMap} from 'angular2-baidu-map';

@NgModule(
  {
    imports:[CommonModule,LianxiRoutingModule,],
    declarations:[LianxiComponent,BaiduMap],
  }
)

export class LianxiModule {
  

}
