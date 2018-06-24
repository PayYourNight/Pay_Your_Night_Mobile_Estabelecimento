import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CheckinPage } from '../pages/checkin/checkin';
import { CheckoutPage } from '../pages/checkout/checkout';
import { ProdutosPage } from '../pages/produtos/produtos';
import { VendaPage } from '../pages/venda/venda';
// import { WelcomePage } from '../pages/welcome/welcome';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { MenuService } from '../services/menu-service';
import { IService } from '../services/IService';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
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

  // openPage(page) {
  //   this.nav.setRoot(page.component);
  // }

  openPage(page) {
    console.log(page);
    if (page.singlePage) {
        this.menu.open();
      this.nav.push(page.component);
    }
    // close the menu when clicking a link from the menu
    // navigate to the new page if it is not the current page
    //if (page.singlePage) {
    //    this.menu.open();
    //    this.nav.push(this.getPageForOpen(page.theme), {
    //      service: this.getServiceForPage(page.theme),
    //      page: page,
    //      componentName: page.theme
    //    });
    //} else {
    //  this.nav.setRoot("ItemsPage", {
    //    componentName: page.theme
    //  });
    //}
  }

  getPageForOpen(value: string): any {
    return null;
  }

  getServiceForPage(value: string): IService {
    return null;
  }
}
