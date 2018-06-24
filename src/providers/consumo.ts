import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ConsumoProvider {
  private user: any;
  private token: String;
  private apiUrl = 'http://localhost:3000/api/produtos';

  constructor(public http: HttpClient) {
    console.log('Hello ConsumoProvider Provider');
    this.user = JSON.parse(localStorage.getItem("user"));
    this.token = JSON.parse(localStorage.getItem("token"));
  }

  getProdutos() {
    let estabelecimento_id = this.user.estabelecimento_id;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': JSON.stringify(this.token || {})
      })
    };

    return this.http.get(this.apiUrl + "/?estabelecimentoid=" + estabelecimento_id, httpOptions);
  }
}
