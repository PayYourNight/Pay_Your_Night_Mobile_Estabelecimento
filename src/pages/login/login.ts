import { Component, Input } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public data: any;
  public username: string;
  public password: string;
  public paircode: string;

  private isUsernameValid: boolean = true;
  private isPasswordValid: boolean = true;

  constructor(
    public navCtrl: NavController,
    public login: LoginProvider,
    private toastCtrl: ToastController) {

    if (localStorage.getItem("user")) {
      this.navCtrl.setRoot(HomePage);
    }

    this.data = {
      "username": "Digite seu nome de usuário",
      "password": "Digite sua senha",
      "paircode": "Digite o código de pareamento",
      "labelUsername": "USERNAME",
      "labelPassword": "PASSWORD",
      "labelPair": "PAIR CODE",
      "register": "Registre-se!",
      "forgotPassword": "Esqueceu a senha?",
      "login": "Login",
      "subtitle": "Bem-vindo",
      "title": "Conecte-se",
      "skip": "",
      "logo": "assets/images/logo/2.png",
      "errorUser": "Campo não pode ser nulo.",
      "errorPassword": "Campo não pode ser nulo.",
      "errorPair": "Campo não pode ser nulo."
    };

  }

  onLogin() {
    if (this.validate()) {
      this.login.signin(this.username, this.password)
        .subscribe((data) => {
          this.setStorage(data);
          this.setPages();                 
        }, error => {
          console.log(error.error.message);
          if (error.error.message == "User not found" || error.error.message == "Wrong Password") {
            this.presentToast("Login ou senha inválidos.");
          } else {
            this.presentToast("Desculpe, alguma coisa saiu errada :(")
          }
        });       

    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 10000,
      position: 'top'
    });

    toast.present();
  }

  setPages(): any {
    this.navCtrl.setRoot(HomePage);
  }

  setStorage(data: any): any {
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', JSON.stringify(data.user.loginToken));
  }

  onForgot() {
    
  }

  onRegister() {

  }

  onSkip() {
  
  }

  onFacebook() {
  
  }

  onTwitter() {

  }

  onGoogle() {

  }

  onPinterest() {

  }

  validate(): boolean {
    this.isUsernameValid = true;
    this.isPasswordValid = true;

    if (!this.username || this.username.length == 0) {
      this.isUsernameValid = false;
    }

    if (!this.password || this.password.length == 0) {
      this.isPasswordValid = false;
    }

    return this.isPasswordValid && this.isUsernameValid;
  }
}
