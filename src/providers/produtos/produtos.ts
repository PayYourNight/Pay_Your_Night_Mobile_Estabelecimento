import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { GlobalsProvider } from '../globals';

@Injectable()
export class ProdutosProvider {
  private user: any; 
  private token: String; 
  private apiUrl = '/api/produtos';

  constructor(public http: HttpClient, private globals: GlobalsProvider) {
    console.log('Hello ProdutosProvider Provider');
    this.user = JSON.parse(localStorage.getItem("user"));
    this.token = JSON.parse(localStorage.getItem("token"));
  }

  getProdutosPaginado(page): Observable<Produto[]> {
    //console.log(localStorage.getItem("user"));
    //console.log(localStorage.getItem("token"));

    //let user = localStorage.getItem("user");

    //let usuario = user._id;
    //let estabelecimento = user.estabelecimento._id;
    
    //const params = new HttpParams()
    //.set('page', page)
    //.set('usuario', usuario)
    //.set('estabelecimento', estabelecimento)
    

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': JSON.stringify( localStorage.token || {} ),        
      })//,
      //params: params
    };

    return this.http.get(this.apiUrl, httpOptions)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getProdutos() {

    let estabelecimento_id = this.user.estabelecimento_id;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': JSON.stringify(this.token || {})
      })
    };

    return this.http.get(this.globals.baseUrl + this.apiUrl + "/?estabelecimentoid=" + estabelecimento_id, httpOptions);
  }
  
  extractData(res: Response) {    
  	let body = res.json();
  	return body || {};
  }

  handleError (error: Response | any) {
  	// let errMsg: string;
  	// if (error instanceof Response) {
    // 	const body = error.json() || '';
    // 	const err = body.res.error || JSON.stringify(body);
    // 	errMsg = '${error.status} - ${error.statusText || ''} ${err}';
  	// } else {
    // 	errMsg = error.message ? error.message : error.toString();
  	// }
  	// console.error(errMsg);
  	return Observable.throw('');
 }

}
