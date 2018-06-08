import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class ListViewGoogleCardsService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'googleCards';

    getTitle = (): string => 'Google Cards';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Full image cards", "theme"  : "layout1"},
          {"title" : "Styled cards 2", "theme"  : "layout2"},
          {"title" : "Styled cards", "theme"  : "layout3"}
        ];
    };

    // GOOGLE CARD - Full image cards data
    getDataForLayout1 = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "title": "Free Ride",
                    "backgroundImage": "assets/images/background/0.jpg",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                },
                {
                    "id": 2,
                    "title": "Mountain Tour",
                    "backgroundImage": "assets/images/background/1.jpg",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                },
                {
                    "id": 3,
                    "title": "Sea Tour",
                    "backgroundImage": "assets/images/background/2.jpg",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                },
                {
                    "id": 4,
                    "title": "Main Stage Event",
                    "backgroundImage": "assets/images/background/3.jpg",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                },
                {
                    "id": 5,
                    "title": "Open Air Concert",
                    "backgroundImage": "assets/images/background/4.jpg",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                },
                {
                    "id": 6,
                    "title": "Free Ride Tour",
                    "backgroundImage": "assets/images/background/5.jpg",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                },
                {
                    "id": 7,
                    "title": "Free Ride",
                    "backgroundImage": "assets/images/background/6.jpg",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                }
            ]
        };
    };

    // GOOGLE CARD - Styled cards 2 data
    getDataForLayout2 = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "title": "Green Cactus",
                    "subtitle": "Family: Cactaceae",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "image": "assets/images/background/8.jpg",
                    "button": "$14.90",
                    "shareIcon": "more"
                },
                {
                    "id": 2,
                    "title": "Red Cactus",
                    "subtitle": "Family: Cactaceae",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "image": "assets/images/background/10.jpg",
                    "button": "$13.99",
                    "shareIcon": "more"
                },
                {
                    "id": 3,
                    "title": "Colors Cactus",
                    "subtitle": "Family: Cactaceae",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "image": "assets/images/background/11.jpg",
                    "button": "$35.05",
                    "shareIcon": "more"
                },
                {
                    "id": 4,
                    "title": "Cactus",
                    "subtitle": "Family: Cactaceae",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "image": "assets/images/background/13.jpg",
                    "button": "$33.99",
                    "shareIcon": "more"
                },
                {
                    "id": 5,
                    "title": "Big Cactus",
                    "subtitle": "Family: Cactaceae",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                    "image": "assets/images/background/12.jpg",
                    "button": "$10.60",
                    "shareIcon": "more"
                }
            ]
        };
    };

    // GOOGLE CARD - Styled cards data
    getDataForLayout3 = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "category": "best offer",
                    "image": "assets/images/background/2.jpg",
                    "title": "Free Ride Tour",
                    "subtitle": "West Avenue, NYC",
                    "button": "$35.99"
                },
                {
                    "id": 2,
                    "category": "main event",
                    "image": "assets/images/background/1.jpg",
                    "title": "Open Air Concert",
                    "subtitle": "Hyde Park, London",
                    "button": "$12.99"
                },
                {
                    "id": 3,
                    "category": "Best Tourt",
                    "image": "assets/images/background/0.jpg",
                    "title": "Sea ture",
                    "subtitle": "Guilin, Kweilin",
                    "button": "$13.45"
                },
                {
                    "id": 4,
                    "category": "Mountain",
                    "image": "assets/images/background/3.jpg",
                    "title": "Mountain Trout",
                    "subtitle": "SMountain Trout Camp",
                    "button": "$38.60"
                },
                {
                    "id": 5,
                    "category": "Bridge Tour",
                    "image": "assets/images/background/4.jpg",
                    "title": "Bridge Tour",
                    "subtitle": "BridgeClimb, Sydney",
                    "button": "$40.85"
                },
                {
                    "id": 6,
                    "category": "best events",
                    "image": "assets/images/background/5.jpg",
                    "title": "Main Stage Event",
                    "subtitle": "Hyde Park, London ",
                    "button": "$56.55"
                }
            ]
        };
    }

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            'onItemClick': function(item: any) {
                  that.toastCtrl.presentToast(item.title);
            },
            'onShare': function(item: any) {
                  that.toastCtrl.presentToast("Share");
            },
        };
    };



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
    };

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('listView/googleCards/' + item.theme)
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
