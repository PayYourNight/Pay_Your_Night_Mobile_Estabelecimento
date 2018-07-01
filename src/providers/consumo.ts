import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ConsumoProvider {
  private user: any;
  private token: String;
  private apiUrl = 'http://localhost:3000/api/consumo';


  constructor(public http: HttpClient) {
    console.log('Hello CheckinProvider Provider');
    this.user = JSON.parse(localStorage.getItem("user"));
    this.token = JSON.parse(localStorage.getItem("token"));
  }

  //TODO
  addConsumo(consumo) {
    consumo["usuarioresp_id"] = this.user._id;
    console.log('realizando busca de consumo');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': JSON.stringify(this.token || {})
      })
    };

    return this.http.post(this.apiUrl, consumo, httpOptions);

  }
}
