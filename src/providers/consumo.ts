import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { GlobalsProvider } from './globals';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Injectable()
export class ConsumoProvider {
  private user: any;
  private token: String;
  private apiUrl = '/api/consumo';

  constructor(
    public http: HttpClient,
    private globals: GlobalsProvider,
    private alertCtrl: AlertController) {
    console.log('Hello CheckinProvider Provider');
    this.user = JSON.parse(localStorage.getItem("user"));
    this.token = JSON.parse(localStorage.getItem("token"));
  }

  //TODO
  addConsumo(consumo) {
    consumo = consumo;
    consumo["usuarioresp_id"] = this.user._id;
    console.log('realizando busca de consumo');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'//,
    //    'Authorization': JSON.stringify(this.token || {})
      })
    };

    this.presentAlert(JSON.stringify(consumo));

    return this.http.post(this.globals.baseUrl + this.apiUrl, JSON.stringify(consumo), httpOptions);
  }

  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: msg,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
