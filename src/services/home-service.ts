import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'

@Injectable()
export class HomeService {

    constructor(public af: AngularFireDatabase) { }
    
    // HOME PAGE INFO
    getData = () => {
        return {
            "toolbarTitle": "Pay Your Night",
            "title": "ECONOMIZE TEMPO",
            "subtitle": "E PACIÊNCIA",
            "subtitle2": "para utilizar com o que realmente importa.",
            "link":"",
            "description": "",
            "background": "assets/images/background/23.jpg"
        };
    };

    load(): Observable<any> {
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('home')
                    .valueChanges()
                    .subscribe(snapshot => {
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                observer.next(this.getData());
                observer.complete();
            });
        }
    }
}
