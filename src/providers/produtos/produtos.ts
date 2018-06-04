import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProdutosProvider {
 
  apiUrl = '';

  constructor(public http: HttpClient) {
    console.log('Hello ProdutosProvider Provider');
  }

  getProdutos(page): Observable<Produto[]> {
    return this.http.get(this.apiUrl + '' + page)
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
