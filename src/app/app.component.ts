import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CheckinPage } from '../pages/checkin/checkin';
import { CheckoutPage } from '../pages/checkout/checkout';
import { ProdutosPage } from '../pages/produtos/produtos';
import { VendaPage } from '../pages/venda/venda';
import { WelcomePage } from '../pages/welcome/welcome';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    
    this.pages = [
      { title: 'Home', component: HomePage },      
      { title: 'Check-in', component: CheckinPage },
      { title: 'Produtos', component: ProdutosPage },
      { title: 'Venda', component: VendaPage },
      { title: 'Check-out', component: CheckoutPage },
      { title: 'Configurações', component: ConfiguracoesPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
