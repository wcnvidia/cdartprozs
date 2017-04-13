import { JpZhuanyeComponent } from './jp-zhuanye.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { JpZhuanyeRoutingModule } from './jp-zhuanye.routes';

export const firebaseConfig = {
  apiKey: "AIzaSyCR5VHTSfPHDrCpoInopksf1Kka43IPBaE",
  authDomain: "cdartprozs.firebaseapp.com",
  databaseURL: "https://cdartprozs.firebaseio.com",
  storageBucket: "cdartprozs.appspot.com",
  messagingSenderId: "445818142122"
};

@NgModule(
  {
    imports: [CommonModule, JpZhuanyeRoutingModule,CollapseModule.forRoot(),AngularFireModule.initializeApp(firebaseConfig)],
    declarations: [JpZhuanyeComponent],
  }
)
export class JpZhuanyeModule {

}