import { Component, ViewChild } from '@angular/core';
import { NavController, App, LoadingController  } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { HomePage } from '../home/home';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  params:any = {};

  constructor(
    private navCtrl: NavController,
    private login: LoginProvider,
    private app: App,
    public loadingCtrl: LoadingController
  ) { 

    this.params.data = {
      "username"        : "Digite o nome",
      "password"        : "Digite a senha",
      "labelUsername"   : "USUÁRIO",
      "labelPassword"   : "SENHA",
      "register"        : "Registrar!",
      "forgotPassword"  : "Esqueceu a senha?",
      "login"           : "Login",
      "subtitle"        : "Bem-vindo",
      "title"           : "Acesse a sua conta",
      "skip"            : "",
      "logo"            : "assets/images/logo/2.png",
      "errorUser"       : "Campo não pode estar vazio.",
      "errorPassword"   : "Campo não pode estar vazio"
    };

    this.params.events = {
      onLogin: function(params) {
        console.log('onLogin');   
        
        // this.loadingCtrl.create({
        //   content: 'Aguarde...',
        //   duration: 3000,
        //   dismissOnPageChange: false
        // }).present();

        let data = {
          user:{
            "_id":"5b06f8546bdb59116c019cf2",
            "salt":"JeieIijR7WZJhhBidwnhPg==",
            "displayName":"eduardo aguiar caixa",
            "provider":"JWT",
            "username":"aguiareduardo",
            "created":"2018-05-24T17:37:24.114Z",
            "roles":["caixa",""],
            "profileImageURL":"/modules/users/client/img/profile/default.png",
            "password":"IgZyIOaEiYLOZrGqU5y5SynVbiYkXccFE3u5glZJtq495bS/Nz+b/sKZWppiu7y4sOy14n0znoKd5y4qA8HWGw==",
            "email":"eduardo.x.aguiar@gmail.com",
            "lastName":"aguiar",
            "firstName":"eduardo",
            "estabelecimento":{
              "_id":"5b0ef8439f88891df82ce84a"
            },
            "__v":0
          },
          token:'JWT aksjdakjskjadkgaidsugiuaisdasdio'
        };
        
        //this.setStorage(data);
        localStorage.setItem('user', JSON.stringify(data.user));     
        localStorage.setItem('token', JSON.stringify(data.token));   
        //this.setPages();                 
        this.navCtrl.pop(); 
        this.navCtrl.setRoot(HomePage);    
        this.navCtrl.popToRoot();  
        // this.login.signin(this.uname.value, this.password.value)
        //   .subscribe((data) => {                   
        //     this.setStorage(data);
        //     // this.setHeader(data);
        //     this.setPages();                 
        //   }, error => {        
        //     this.setError(error);
        //   });       
        
        //this.toastCtrl.presentToast('onLogin');
      },
      onForgot: function() {
        //this.toastCtrl.presentToast('onForgot');
      },
      onRegister: function(params) {
        //this.toastCtrl.presentToast('onRegister');
      },
      onSkip: function(params) {
        //this.toastCtrl.presentToast('onSkip');
      },
      onFacebook: function(params) {
        //this.toastCtrl.presentToast('onFacebook');
      },
      onTwitter: function(params) {
        //this.toastCtrl.presentToast('onTwitter');
      },
      onGoogle: function(params) {
        //this.toastCtrl.presentToast('onGoogle');
      },
      onPinterest: function(params) {
        //this.toastCtrl.presentToast('onPinterest');
      }
    };
    
    //this.error = null;

  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Aguarde...',
      duration: 3000,
      dismissOnPageChange: false
    }).present();
  }

  signIn(){    
    this.presentLoading();
    let data = {
      "_id":"5b06f8546bdb59116c019cf2",
      "salt":"JeieIijR7WZJhhBidwnhPg==",
      "displayName":"eduardo aguiar caixa",
      "provider":"JWT",
      "username":"aguiareduardo",
      "created":"2018-05-24T17:37:24.114Z",
      "roles":["caixa",""],
      "profileImageURL":"/modules/users/client/img/profile/default.png",
      "password":"IgZyIOaEiYLOZrGqU5y5SynVbiYkXccFE3u5glZJtq495bS/Nz+b/sKZWppiu7y4sOy14n0znoKd5y4qA8HWGw==",
      "email":"eduardo.x.aguiar@gmail.com",
      "lastName":"aguiar",
      "firstName":"eduardo",
      "estabelecimento":{
        "_id":"5b0ef8439f88891df82ce84a"
      },
      "__v":0
    };
    
    this.setStorage(data);
    this.setPages();                 
    // this.login.signin(this.uname.value, this.password.value)
    //   .subscribe((data) => {                   
    //     this.setStorage(data);
    //     // this.setHeader(data);
    //     this.setPages();                 
    //   }, error => {        
    //     this.setError(error);
    //   });    
  }

  setPages(){
    this.navCtrl.pop(); 
    this.navCtrl.setRoot(HomePage);    
    this.navCtrl.popToRoot();  
  }

  setStorage(data){
    console.log(data.user);
    console.log(data.token);
    localStorage.setItem('user', JSON.stringify(data.user));     
    localStorage.setItem('token', JSON.stringify(data.token));   
  }

  // setHeader(data){
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Authorization': data.token,
  //       'User': data.user
  //     })
  //   };
  // }

  setError(error){
    //this.error = error;              
  }
}