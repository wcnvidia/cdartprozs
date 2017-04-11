import { RemenComponent } from './remen/remen.component';

import { AdModule } from './../share/ad/ad.module';


import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {LunboComponent} from './lunbo.component';
import {LunboRoutingModule} from './Lunbo.routes';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { TabsModule } from 'ng2-bootstrap';



@NgModule(
  {
    imports:[CommonModule,LunboRoutingModule,CarouselModule.forRoot(), TabsModule.forRoot(),AdModule,],
    declarations:[LunboComponent,RemenComponent ],
  }
)
export class LunboModule {

}

