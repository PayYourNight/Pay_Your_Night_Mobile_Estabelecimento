import { Component, ViewChild } from '@angular/core';
import { NavController, App, LoadingController  } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    error: any;
    @ViewChild('usernameOrEmail') uname;
    @ViewChild('password') password;    

  constructor(
    private navCtrl: NavController,
    private login: LoginProvider,
    private app: App,
    public loadingCtrl: LoadingController
  ) { 
    
    this.error = null;

  }

  signIn(){    
    this.presentLoading();
    this.login.signin(this.uname.value, this.password.value)
      .subscribe((data) => {                   
        this.setStorage(data);
        this.setPages();                 
      }, error => {        
        this.setError(error);
      });    
  }

  setPages(){
    this.navCtrl.pop(); 
    this.navCtrl.setRoot(HomePage);    
    this.navCtrl.popToRoot();  
  }

  setStorage(data){
    localStorage.setItem('user', JSON.stringify(data));     
  }

  setError(error){
    this.error = error;              
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Aguarde...',
      duration: 3000,
      dismissOnPageChange: false
    }).present();
  }
}