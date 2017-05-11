import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YuyueComponent } from './yuyue.component';
import { YuyueRoutingModule } from './yuyue.routes';
import { AngularFireModule } from 'angularfire2';



export const firebaseConfig = {
    apiKey: "AIzaSyCR5VHTSfPHDrCpoInopksf1Kka43IPBaE",
    authDomain: "cdartprozs.firebaseapp.com",
    databaseURL: "https://cdartprozs.firebaseio.com",
    storageBucket: "cdartprozs.appspot.com",
    messagingSenderId: "445818142122"
};


@NgModule(
    {
        imports: [CommonModule, YuyueRoutingModule, AngularFireModule.initializeApp(firebaseConfig),],
        declarations: [YuyueComponent,],
    }
)
export class YuyueModule {

}
