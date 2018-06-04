import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PaisPage } from '../pages/pais/pais';
import { IntroPage } from '../pages/intro/intro';
import { HttpModule } from '@angular/http';
import { PaisProvider } from '../providers/pais/pais';
import {SQLite}	from '@ionic-native/sqlite'
import { DatabaseProvider } from '../providers/database/database';
import { PaisDatabaseProvider } from '../providers/pais-database/pais-database';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PaisPage,
    IntroPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PaisPage,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PaisProvider,
    SQLite,
    DatabaseProvider,
    PaisDatabaseProvider
  ]
})
export class AppModule {}
