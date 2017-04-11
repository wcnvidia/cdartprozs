import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {BaomingComponent} from './baoming.component';
import {BaomingRoutingModule} from './baoming.routes';
import { AngularFireModule } from 'angularfire2';
import { ModalModule } from 'ngx-bootstrap/modal';

export const firebaseConfig = {
  apiKey: "AIzaSyCR5VHTSfPHDrCpoInopksf1Kka43IPBaE",
  authDomain: "cdartprozs.firebaseapp.com",
  databaseURL: "https://cdartprozs.firebaseio.com",
  storageBucket: "cdartprozs.appspot.com",
  messagingSenderId: "445818142122"
};


@NgModule(
  {
    imports:[CommonModule,BaomingRoutingModule, AngularFireModule.initializeApp(firebaseConfig),ModalModule.forRoot(),],
    declarations:[BaomingComponent],
  }
)
export class BaomingModule {

}
