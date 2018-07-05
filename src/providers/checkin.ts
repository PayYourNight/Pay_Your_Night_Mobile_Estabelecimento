import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalsProvider } from './globals';

@Injectable()
export class CheckinProvider {
  private user: any;
  private token: String;
  private apiUrl = '/api/checkin';
  

  constructor(public http: HttpClient, private globals: GlobalsProvider) {
    console.log('Hello CheckinProvider Provider');
    this.user = JSON.parse(localStorage.getItem("user"));
    this.token = JSON.parse(localStorage.getItem("token"));
  }

  doCheckin(usuario_id: string) {
    let estabelecimento_id = this.user.estabelecimento_id;

    let checkin = {
      usuario_id: usuario_id,
      usuarioresp_id: this.user._id,
      estabelecimento_id: estabelecimento_id,
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': JSON.stringify(this.token || {})
      })
    };

    return this.http.post(this.globals.baseUrl + this.apiUrl, JSON.stringify(checkin), httpOptions);
  }
}
