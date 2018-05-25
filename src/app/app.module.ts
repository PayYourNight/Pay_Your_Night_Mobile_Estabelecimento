import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome'
import { HomePage } from '../pages/home/home';

import { CheckinPage } from '../pages/checkin/checkin';
import { CheckinService } from '../pages/checkin/checkin.service';

import { CheckoutPage } from '../pages/checkout/checkout';
import { ProdutosPage } from '../pages/produtos/produtos';
import { VendaPage } from '../pages/venda/venda';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LoginProvider } from '../providers/login/login';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';

let config: SocketIoConfig = { 
  url: "http://localhost:3000/",
  options: {}
};

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    HomePage,    
    CheckinPage, 
    CheckoutPage,
    ProdutosPage,
    VendaPage,
    ConfiguracoesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot(config),
    HttpClientModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    HomePage,
    CheckinPage,
    CheckoutPage,
    ProdutosPage,
    VendaPage,
    ConfiguracoesPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    CheckinService,
    LoginProvider
  ]
})
export class AppModule {}
