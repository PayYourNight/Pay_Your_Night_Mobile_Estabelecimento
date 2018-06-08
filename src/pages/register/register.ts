import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  params:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params.data = {
      "toolbarTitle"        : "",
      "title"               : "Registrar",
      "background"          : "assets/images/background/2.jpg",
      "username"            : "Digite o nome",
      "city"                : "Your home town",
      "country"             : "Where are you from?",
      "password"            : "Digite a senha",
      "email"               : "Digite o email",
      "register"            : "registrar",
      "lableUsername"       : "USUÁRIO",
      "lablePassword"       : "SENHA",
      "lableEmail"          : "E-MAIL",
      "lableCountry"        : "PAÍS",
      "lableCity"           : "CIDADE",
      "errorUser"           : "O campo não pode estar vazio.",
      "errorPassword"       : "O campo não pode estar vazio.",
      "errorEmail"          : "Endereço de e-mail inválido.",
      "errorCountry"        : "O campo não pode estar vazio.",
      "errorCity"           : "O campo não pode estar vazio."
    };;
    this.params.events = {
      onRegister: function(params) {
        console.log(params);
          //this.toastCtrl.presentToast('onRegister');
      },
      onSkip: function(params) {
          //this.toastCtrl.presentToast('onSkip');
      }
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
