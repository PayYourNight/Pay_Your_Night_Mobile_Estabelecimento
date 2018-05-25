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
      'password': password
      };

    return this.http
    .post('http://localhost:3000/api/auth/signin', credentials);
  }

  signout(){
    
  }
}
