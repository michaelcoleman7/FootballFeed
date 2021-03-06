import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule} from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

//Import Pages
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';
import { FixturesPage } from '../pages/fixtures/fixtures';

//Import Plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Vibration } from '@ionic-native/vibration';

//Import Providers
import { NewsProvider } from '../providers/news/news';
import { TeamsProvider } from '../providers/teams/teams';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SettingsPage,
    AccountPage,
    FixturesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SettingsPage,
    AccountPage,
    FixturesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider,
    TeamsProvider,
    Camera,
    Vibration
  ]
})
export class AppModule {}
