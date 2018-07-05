import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GlobalsProvider } from '../globals';

@Injectable()
export class LoginProvider {
   public headers = new HttpHeaders();
  
  constructor(public http: HttpClient, private globals: GlobalsProvider) {}
  
  signin(usernameOrEmail, password) {
    let credentials = {
      'usernameOrEmail': usernameOrEmail,
      'password': password,
      'isEsbalecimentoApp': true
    };

    return this.http.post(this.globals.baseUrl + '/api/auth/authenticate', credentials);
  }
}
