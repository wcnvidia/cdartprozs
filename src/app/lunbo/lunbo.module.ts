import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {LunboComponent} from './lunbo.component';
import {LunboRoutingModule} from './Lunbo.routes';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { TabsModule } from 'ng2-bootstrap';

@NgModule(
  {
    imports:[CommonModule,LunboRoutingModule,CarouselModule.forRoot(), TabsModule.forRoot(),],
    declarations:[LunboComponent],
  }
)
export class LunboModule {

}

