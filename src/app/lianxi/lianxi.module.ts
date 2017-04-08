import { NgModule,  }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import{LianxiComponent} from './lianxi.component';
import {LianxiRoutingModule} from './Lianxi.routes';


@NgModule(
  {
    imports:[CommonModule,LianxiRoutingModule,],
    declarations:[LianxiComponent,],
  }
)

export class LianxiModule {
  

}
