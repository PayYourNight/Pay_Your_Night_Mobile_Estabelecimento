import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  params:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (localStorage.getItem('user')){
      this.navCtrl.setRoot(HomePage);
    }

    // this.params.data = {
    //   "duration": 100000,
    //   "backgroudImage": 'assets/images/background/23.jpg',
    //   "logo": 'assets/images/logo/1.png',
    //   "title": 'IONICTEMPLATE'
    // };

    // this.params.events = {
    //   "onRedirect": function(){
    //     console.log('redirect');
    //   }
    // };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  goLogin(){
    this.navCtrl.push(LoginPage)
  }

  goRegister(){
    this.navCtrl.push(RegisterPage)
  }

}
