import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class CheckinService {

    constructor(private http:HttpClient) {}
 
    criarCheckin(usuarioId, estabelecimentoId, transactionId) {
        return this.http.post('http://localhost:3000/api/checkin', { 
            "usuario": usuarioId, 
            "estabelecimento": estabelecimentoId,
            "transactionId": transactionId
        }, httpOptions);
    }
}