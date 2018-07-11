import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CheckinPage } from '../pages/checkin/checkin';
import { CheckoutPage } from '../pages/checkout/checkout';
import { ProdutosPage } from '../pages/produtos/produtos';
import { VendaPage } from '../pages/venda/venda';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { LoginPage } from '../pages/login/login';
import { MenuService } from '../services/menu-service';
import { IService } from '../services/IService';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pages: any;
  params:any;
  leftMenuTitle: string;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public menu: MenuController,
    private menuService: MenuService) {
    this.initializeApp();
    
    this.pages = menuService.getAllThemes();
    this.leftMenuTitle = menuService.getTitle();

    this.menuService.load(null).subscribe( snapshot => {
      this.params = snapshot;
  });


  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if (page.singlePage) {
        this.menu.open();
      this.nav.push(page.component);
    }
  }

  getPageForOpen(value: string): any {
    return null;
  }

  getServiceForPage(value: string): IService {
    return null;
  }
}
