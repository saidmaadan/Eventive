import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { Apikey } from '../private/apikey';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any
  apikey: Apikey;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.apikey = new Apikey();

    firebase.initializeApp({
      apiKey: this.apikey.apiKey,
      authDomain: this.apikey.authDomain,
      databaseURL: this.apikey.databaseURL,
      storageBucket: this.apikey.storageBucket,
      messagingSenderId: this.apikey.messagingSenderId
    });

    const unsubscribe = firebase.auth().onAuthStateChanged((user) =>{
      if(!user){
        this.rootPage = 'login';
        unsubscribe();
      }else{
        this.rootPage = HomePage;
        unsubscribe();
      }
    });

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
