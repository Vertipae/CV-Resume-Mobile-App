import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import these AngularFireModule and AngularFireAuthmode
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// add Firebase
var config = {
  apiKey: "AIzaSyCf6WRXThsnE7sISB0H347J5GKVb8qS9r0",
  authDomain: "myapptest-3375c.firebaseapp.com",
  databaseURL: "https://myapptest-3375c.firebaseio.com",
  projectId: "myapptest-3375c",
  storageBucket: "myapptest-3375c.appspot.com",
  messagingSenderId: "69680220485"
};

@NgModule({
  declarations: [
    MyApp
    // remove HomePage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Notice these
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    // remove HomePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
