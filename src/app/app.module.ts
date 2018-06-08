import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome'
import { HomePage } from '../pages/home/home';

import { CheckinPage } from '../pages/checkin/checkin';
// import { QrcodeCheckinPage } from '../pages/checkin/qrcode-checkin';
import { CheckinService } from '../pages/checkin/checkin.service';

import { CheckoutPage } from '../pages/checkout/checkout';
import { ProdutosPage } from '../pages/produtos/produtos';
import { ProdutoPage } from '../pages/produtos/produto';
import { VendaPage } from '../pages/venda/venda';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LoginProvider } from '../providers/login/login';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';

import { ProdutosProvider } from '../providers/produtos/produtos';

import { SplashScreenLayout1 } from '../components/splash-screen/layout-1/splash-screen-layout-1';
import { LoginLayout1 } from '../components/login/layout-1/login-layout-1';
import { RegisterLayout2 } from '../components/register/layout-2/register-layout-2';
import { MenuService } from '../services/menu-service';
import { AppSettings } from '../services/app-settings';
import { LoadingService } from '../services/loading-service';


let config: SocketIoConfig = { 
   url: "http://10.0.2.2:3000/",
  //url: "http://localhost:3000/",
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
    // QrcodeCheckinPage,
    CheckoutPage,
    ProdutosPage,
    ProdutoPage,
    VendaPage,
    ConfiguracoesPage,
    SplashScreenLayout1,
    LoginLayout1,
    RegisterLayout2
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot(config),
    HttpClientModule,
    AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG),
    AngularFireDatabaseModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    HomePage,
    CheckinPage,
    // QrcodeCheckinPage,
    CheckoutPage,
    ProdutosPage,
    ProdutoPage,
    VendaPage,
    ConfiguracoesPage,
    SplashScreenLayout1,
    LoginLayout1,
    RegisterLayout2    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    CheckinService,
    LoginProvider,
    ProdutosProvider,
    MenuService,
    LoadingService    
  ]
})
export class AppModule {}
