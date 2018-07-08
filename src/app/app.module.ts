import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ToastController } from 'ionic-angular';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import * as Sentry from 'sentry-cordova';



import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome'
import { HomePage } from '../pages/home/home';

import { CheckinPage } from '../pages/checkin/checkin';
// import { QrcodeCheckinPage } from '../pages/checkin/qrcode-checkin';

import { CheckoutPage } from '../pages/checkout/checkout';
import { ProdutosPage } from '../pages/produtos/produtos';
import { ProdutoPage } from '../pages/produtos/produto';
import { VendaPage } from '../pages/venda/venda';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LoginProvider } from '../providers/login/login';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { QrcodeReaderConsumoPage } from '../pages/venda/barcodereader_consumo/barcodereader_consumo';
import { BuscaProdutosVendaPage } from '../pages/venda/buscaprodutos/buscaprodutos';
import { ProdutosProvider } from '../providers/produtos/produtos';

import { SplashScreenLayout1 } from '../components/splash-screen/layout-1/splash-screen-layout-1';
import { LoginLayout1 } from '../components/login/layout-1/login-layout-1';
import { RegisterLayout2 } from '../components/register/layout-2/register-layout-2';
import { MenuService } from '../services/menu-service';
import { AppSettings } from '../services/app-settings';
import { LoadingService } from '../services/loading-service';
import { MyErrorHandler } from '../handler/errorhandler';
import { EncerrarPedidoPage } from '../pages/venda/buscaprodutos/encerrarpedido/encerrarpedido';
import { CheckinProvider } from '../providers/checkin';
import { ConsumoProvider } from '../providers/consumo';
import { GlobalsProvider } from '../providers/globals';
import { CheckoutProvider } from '../providers/checkout/checkout';


let config: SocketIoConfig = { 
   //url: "http://10.0.2.2:3000/",
  //url: "http://localhost:3000/",
    url: "https://intense-journey-43070.herokuapp.com",
  options: {}
};

Sentry.init({ dsn: 'https://bcb8b1b529be4cd4ae5b4f506b438625@sentry.io/1237024' });


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
    ProdutoPage,
    VendaPage,
    ConfiguracoesPage,
    SplashScreenLayout1,
    LoginLayout1,
    RegisterLayout2,
    BuscaProdutosVendaPage,
    QrcodeReaderConsumoPage,
    EncerrarPedidoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot(config),
    HttpClientModule,
    AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    NgxQRCodeModule
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
    ProdutoPage,
    VendaPage,
    ConfiguracoesPage,
    SplashScreenLayout1,
    LoginLayout1,
    RegisterLayout2,
    BuscaProdutosVendaPage,
    QrcodeReaderConsumoPage,
    EncerrarPedidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //{provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: ErrorHandler, useClass: MyErrorHandler },
    BarcodeScanner,    
    LoginProvider,
    ProdutosProvider,
    MenuService,
    LoadingService,
    CheckinProvider,
    ConsumoProvider,
    GlobalsProvider,
    CheckoutProvider
  ]
})
export class AppModule {}
