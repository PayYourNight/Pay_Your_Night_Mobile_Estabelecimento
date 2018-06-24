import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { LoadingService } from './loading-service'
import { HomePage } from '../pages/home/home';
import { CheckinPage } from '../pages/checkin/checkin';
import { ProdutosPage } from '../pages/produtos/produtos';
import { VendaPage } from '../pages/venda/venda';
import { CheckoutPage } from '../pages/checkout/checkout';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';

@Injectable()
export class MenuService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) {}

    getId = ():string => 'menu';

    getTitle = ():string => 'UIAppTemplate';

    getAllThemes = (): Array<any> => {
      return [
        { "title": "Home", "theme": "listViews", "icon": "icon-home", "component": HomePage, "singlePage": true  },
        { "title": "Check-in", "theme": "listViews", "icon": "icon-home", "component": CheckinPage, "singlePage": true  },
        { "title": "Produtos", "theme": "listViews", "icon": "icon-home", "component": ProdutosPage, "singlePage": true  },
        { "title": "Venda", "theme": "listViews", "icon": "icon-home", "component": VendaPage, "singlePage": true  },
        { "title": "Check-out", "theme": "listViews", "icon": "icon-home", "component": CheckoutPage, "singlePage": true  },
        { "title": "Configurações", "theme": "listViews", "icon": "icon-home", "component": ConfiguracoesPage, "singlePage": true}
        ]
     };

    getDataForTheme = () => {
      return {
        "background": "assets/images/background/1.jpg",
        "image": "assets/images/logo/1.png",
        "title": "Pay Your Night",
        "description": "Por um mundo mais conectado e divertido!"
      };
    };

    getEventsForTheme = (menuItem: any): any => {
      return {};
    };

    prepareParams = (item: any) => {
      return {
        title: item.title,
        data: {},
        events: this.getEventsForTheme(item)
      };
    };

    load(item: any): Observable<any> {
      var that = this;
      that.loadingService.show();
      if (AppSettings.IS_FIREBASE_ENABLED) {
        return new Observable(observer => {
          this.af
            .object('menu')
            .valueChanges()
            .subscribe(snapshot => {
              that.loadingService.hide();
              observer.next(snapshot);
              observer.complete();
            }, err => {
              that.loadingService.hide();
              observer.error([]);
              observer.complete();
            });
        });
      } else {
        return new Observable(observer => {
          that.loadingService.hide();
          observer.next(this.getDataForTheme());
          observer.complete();
        });
      }
    }
}
