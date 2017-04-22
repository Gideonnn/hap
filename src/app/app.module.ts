import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Items } from '../providers/items.provider';

export const pages = [
  MyApp,
  HomePage
];

export const declarations = [
  ...pages
];

export const entryComponents = [
  ...pages
];

export const providers = [
  StatusBar,
  SplashScreen,
  HomePage,
  Items,
  { provide: ErrorHandler, useClass: IonicErrorHandler }
];

@NgModule({
  declarations: declarations,
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents,
  providers: providers
})
export class AppModule {}
