import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routes';




import { ButtonsModule } from 'ng2-bootstrap/buttons';




import { AppComponent } from './app.component';



import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AdComponent } from './share/ad/ad.component';
import { RemenComponent } from './share/remen/remen.component';







@NgModule({
  declarations: [
    AppComponent,
    AdComponent,
    RemenComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    ButtonsModule.forRoot(),



  ],

  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }
