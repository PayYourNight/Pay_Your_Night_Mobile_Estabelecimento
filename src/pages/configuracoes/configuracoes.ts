import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { WelcomePage } from '../welcome/welcome';

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
    this.navCtrl.setRoot(WelcomePage);
    let root = this.app.getRootNavs(); 
    root.pop();
  }

}
