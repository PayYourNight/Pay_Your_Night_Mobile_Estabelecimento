import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginProvider {
   public headers = new HttpHeaders();
  
   constructor(public http: HttpClient) {}
  
  signin(usernameOrEmail, password){
    let credentials = {
      'usernameOrEmail': usernameOrEmail,
      'password': password,
      'isEsbalecimentoApp': true
      };

    return this.http
    //.post('http://10.0.2.2:3000/api/auth/authenticate', credentials);
    .post('http://localhost:3000/api/auth/authenticate', credentials);
  }

  signout(){
    
  }
}
