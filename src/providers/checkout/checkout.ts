import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalsProvider } from '../globals';

@Injectable()
export class CheckoutProvider {
  usuario: any;

  constructor(public http: HttpClient, private globals: GlobalsProvider) {
    console.log('Hello CheckoutProvider Provider');
    this.usuario = localStorage.getItem("user");
  }

  doCheckout(usuarioid) {
    var body = {
      usuario_id: usuarioid,
      usuarioresp_id: this.usuario._id
    };

    return this.http.post(this.globals.baseUrl + "/api/checkouts", body);
  }

}
