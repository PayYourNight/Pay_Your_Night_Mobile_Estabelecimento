import { Component, ViewChild } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    @ViewChild('usernameOrEmail') uname;
    @ViewChild('password') password;

  constructor(
    private navCtrl: NavController,
    private login: LoginProvider,
    private app: App
  ) { }

  signIn(){    
    this.login.signin(this.uname.value, this.password.value)
      .subscribe((data) => {
        localStorage.setItem('user', JSON.stringify(data));          
        this.navCtrl.push(HomePage);             
      });    
  }
}