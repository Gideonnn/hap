import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StoreModule } from '@ngrx/store';

import { MyApp } from './app.component';

// Pages
import { HomePage } from '../pages/home/home';

// Store
import { categories } from '../store/categories.reducer';

// Providers
import { Categories } from '../providers/categories.provider';

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
  Categories,
  { provide: ErrorHandler, useClass: IonicErrorHandler }
];

@NgModule({
  declarations: declarations,
  imports: [
    IonicModule.forRoot(MyApp),
    StoreModule.provideStore({ categories })
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents,
  providers: providers
})
export class AppModule {}
