import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class CheckBoxService implements IService {


    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'checkBoxes';

    getTitle = (): string => 'Check Boxes';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Simple", "theme"  : "layout1"},
          {"title" : "With Avatar", "theme"  : "layout2"},
          {"title" : "With Details", "theme"  : "layout3"}
        ];
    };

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            onButton: function(item: any) {
                that.toastCtrl.presentToast(item.title);
            }
        };
    };

    // CHECK PAGE - Simple data
    getDataForLayout1 = (): any => {
        return {
            "title": "Contacts",
            "items": [
                {
                    "id": 1,
                    "title": "marshall@yahoo.com",
                    "isChecked": false
                },
                {
                    "id": 2,
                    "title": "cain@outlook.com",
                    "isChecked": false
                },
                {
                    "id": 4,
                    "title": "meadows@mail.com",
                    "isChecked": true
                },
                {
                    "id": 3,
                    "title": "cain@outlook.com",
                    "isChecked": true
                },
                {
                    "id": 5,
                    "title": "meadows@mail.com",
                    "isChecked": true
                },
                {
                    "id": 6,
                    "title": "valdez@yahoo.com",
                    "isChecked": true
                },
                {
                    "id": 7,
                    "title": "norris@gmail.com",
                    "isChecked": true
                },
                {
                    "id": 8,
                    "title": "wiley@outlook.com",
                    "isChecked": true
                },
                {
                    "id": 9,
                    "title": "norris@gmail.com",
                    "isChecked": true
                },
                {
                    "id": 10,
                    "title": "wiley@outlook.com",
                    "isChecked": true
                },
                {
                    "id": 11,
                    "title": "miles@mail.com",
                    "isChecked": true
                },
                {
                    "id": 12,
                    "title": "gaines@yahoo.com",
                    "isChecked": true
                },
                {
                    "id": 13,
                    "title": "fletcher@outlook.com",
                    "isChecked": true
                }
            ]
        };
    };

    // CHECK PAGE - With Avatar data
    getDataForLayout2 = (): any => {
        return {
            "title": "Followers",
            "items": [
                {
                    "id": 1,
                    "title": "Grant Marshall",
                    "subtitle": "@grant333",
                    "isChecked": false,
                    "image": "assets/images/avatar/1.jpg"
                },
                {
                    "id": 2,
                    "title": "Pena Valdez",
                    "subtitle": "@penaxxy",
                    "isChecked": false,
                    "image": "assets/images/avatar/2.jpg"
                },
                {
                    "id": 4,
                    "title": "Jessica Miles",
                    "subtitle": "@jessica957",
                    "isChecked": true,
                    "image": "assets/images/avatar/3.jpg"
                },
                {
                    "id": 3,
                    "title": "Kerri Barber",
                    "subtitle": "@kerri333",
                    "isChecked": true,
                    "image": "assets/images/avatar/4.jpg"
                },
                {
                    "id": 5,
                    "title": "Natasha Gamble",
                    "subtitle": "@natashaxxy",
                    "isChecked": true,
                    "image": "assets/images/avatar/5.jpg"
                },
                {
                    "id": 6,
                    "title": "White Castaneda",
                    "subtitle": "@white34",
                    "isChecked": true,
                    "image": "assets/images/avatar/6.jpg"
                },
                {
                    "id": 7,
                    "title": "Vanessa Ryan",
                    "subtitle": "@vanessa957",
                    "isChecked": true,
                    "image": "assets/images/avatar/7.jpg"
                },
                {
                    "id": 8,
                    "title": "Meredith Hendricks",
                    "subtitle": "@meredith957",
                    "isChecked": true,
                    "image": "assets/images/avatar/1.jpg"
                },
                {
                    "id": 9,
                    "title": "Carol Kelly",
                    "subtitle": "@carolm_e",
                    "isChecked": true,
                    "image": "assets/images/avatar/2.jpg"
                },
                {
                    "id": 10,
                    "title": "Barrera Ramsey",
                    "subtitle": "@barreraxxy",
                    "isChecked": true,
                    "image": "assets/images/avatar/3.jpg"
                }
            ]
        };
    };

    // CHECK PAGE - With Details data
    getDataForLayout3 = (): any => {
        return {
            "title": "Wish list",
            "items": [
                {
                    "id": 1,
                    "title": "Brogan",
                    "subtitle": "Chad",
                    "isChecked": true,
                    "detail": "225 Bills Place"
                },
                {
                    "id": 2,
                    "title": "Rehrersburg",
                    "subtitle": "Romania",
                    "isChecked": false,
                    "detail": "266 Tiffany Place"
                },
                {
                    "id": 3,
                    "title": "Durham",
                    "subtitle": "Mauritania",
                    "isChecked": false,
                    "detail": "240 Hillel Place"
                },
                {
                    "id": 4,
                    "title": "Callaghan",
                    "subtitle": "Tonga",
                    "isChecked": true,
                    "detail": "933 Stryker Street"
                },
                {
                    "id": 5,
                    "title": "Manitou",
                    "subtitle": "Norway",
                    "isChecked": true,
                    "detail": "222 Duffield Street"
                },
                {
                    "id": 6,
                    "title": "Curtice",
                    "subtitle": "Nauru",
                    "isChecked": true,
                    "detail": "225 Bills Place"
                },
                {
                    "id": 7,
                    "title": "Barronett",
                    "subtitle": "Iran",
                    "isChecked": true,
                    "detail": "266 Tiffany Place"
                },
                {
                    "id": 8,
                    "title": "Williston",
                    "subtitle": "Ireland",
                    "isChecked": true,
                    "detail": "240 Hillel Place"
                },
                {
                    "id": 9,
                    "title": "Norvelt",
                    "subtitle": "Indonesia",
                    "isChecked": true,
                    "detail": "500 Gold Street"
                },
                {
                    "id": 10,
                    "title": "Keller",
                    "subtitle": "Austria",
                    "isChecked": true,
                    "detail": "463 Harbor Court"
                },
                {
                    "id": 11,
                    "title": "Maxville",
                    "subtitle": "Panama",
                    "isChecked": true,
                    "detail": "26 Tiffany Place"
                }
            ]
        };
    }

    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: [],
            events: this.getEventsForTheme(item)
        };
        result[this.getShowItemId(item)] = true;
        return result;
    };

    getShowItemId = (item: any): string => {
        return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    }

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('checkBoxes/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                        that.loadingService.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        that.loadingService.hide();
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
}
