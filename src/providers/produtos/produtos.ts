import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProdutosProvider {
 
  apiUrl = 'http://localhost:3000/api/produtos';

  constructor(public http: HttpClient) {
    console.log('Hello ProdutosProvider Provider');
  }

  getProdutosPaginado(page): Observable<Produto[]> {     
    // console.log(localStorage.user);
    // console.log(localStorage.token);

    let usuario = localStorage.user._id;
    let estabelecimento = localStorage.user.estabelecimento._id;
    
    const params = new HttpParams()
    .set('page', page)
    .set('usuario', usuario)
    .set('estabelecimento', estabelecimento)
    

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': JSON.stringify( localStorage.token || {} ),        
      }),
      params: params
    };

    return this.http.get(this.apiUrl, httpOptions)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getProdutos(): Observable<Produto[]> {
    // console.log(localStorage.user);
    // console.log(localStorage.token);

    //let usuario = localStorage.user._id;
    let estabelecimento = localStorage.user.estabelecimento._id;

    const params = new HttpParams()
      .set('estabelecimento', estabelecimento)


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': JSON.stringify(localStorage.token || {}),
      }),
      params: params
    };

    return this.http.get(this.apiUrl, httpOptions)
      .map(this.extractData)
      .catch(this.handleError);
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
