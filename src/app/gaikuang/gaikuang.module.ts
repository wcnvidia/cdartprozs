import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {GaikuangComponent} from './gaikuang.component';
import {GaikuangRoutingModule} from './gaikuang.routes';


@NgModule(
  {
    imports:[CommonModule,GaikuangRoutingModule],
    declarations:[GaikuangComponent],
  }
)
export class GaikuangModule {

}
