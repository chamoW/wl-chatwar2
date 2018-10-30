import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { ConversationPageModule } from '../pages/conversation/conversation.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { AboutPageModule } from '../pages/about/about.module';
import { UserProvider } from '../providers/user/user.provider';
import { SearchPipe } from '../pipes/search/search';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AuthenticationProvider } from '../providers/authentication/authentication';





// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCocgALuj45Tbq1gHslkZgKUak8JOdP9WU",
  authDomain: "wl-chatwar2.firebaseapp.com",
  databaseURL: "https://wl-chatwar2.firebaseio.com",
  projectId: "wl-chatwar2",
  storageBucket: "wl-chatwar2.appspot.com",
  messagingSenderId: "110712791119"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule,
    LoginPageModule,
    ConversationPageModule,
    ProfilePageModule,
    AboutPageModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserProvider,
    AuthenticationProvider,
  ]
})
export class AppModule { }
