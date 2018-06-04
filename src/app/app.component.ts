import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { DatabaseProvider } from '../providers/database/database';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbProvider :	DatabaseProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      dbProvider.createDatabase().then (()	=>{
        this.abrirHomePage (splashScreen);
      }).catch ((e)=>{
        console.log (e);
        this.abrirHomePage (splashScreen);
      });
    });
  }
  private abrirHomePage (splashScreen :	SplashScreen){
        splashScreen.hide();
        this.rootPage =	TabsPage;
  }
}
