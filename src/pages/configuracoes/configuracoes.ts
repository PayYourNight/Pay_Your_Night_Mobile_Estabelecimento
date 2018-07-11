import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private login: LoginProvider,
    private app: App) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }

  logout(){    
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);
    let root = this.app.getRootNavs(); 
    root.pop();
  }

}
