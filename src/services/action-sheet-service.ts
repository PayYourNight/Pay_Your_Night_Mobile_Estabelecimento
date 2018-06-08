import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class ActionSheetService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'actionSheet';

    getTitle = (): string => 'Action Sheet';

    getAllThemes = (): Array<any> => {
        return [
            { "title": "Basic", "theme": "layout1" },
            { "title": "News", "theme": "layout2" },
            { "title": "With Text Header", "theme": "layout3" }
        ];
    };

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    // ACTION-SHEET - Basic data
    getDataForLayout1 = (): any => {
        return {
            "headerTitle": "Basic",
            "headerImage": "assets/images/background-small/4.jpg",
            "shareIcon": "more",
            "actionSheet": {
                "buttons": [
                    {
                        "text": "Add to Cart",
                        "role": "destructive"
                    },
                    {
                        "text": "Add to Favorites"
                    },
                    {
                        "text": "Read more info"
                    },
                    {
                        "text": "Delete Item"
                    },
                    {
                        "text": "Cancel",
                        "role": "cancel"
                    }
                ]
            },
            "items": [
                {
                    "id": 1,
                    "title": "Isaac Raid",
                    "subtitle": "Subtitle Text",
                    "category": "NEW GAME",
                    "button": "$3.99",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "productDescriptions": [
                        {
                            "id": 1,
                            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        },
                        {
                            "id": 2,
                            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        },
                        {
                            "id": 3,
                            "description": "passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                        },
                        {
                            "id": 4,
                            "description": "passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                        }
                    ]
                }
            ]
        }
    };

    // ACTION-SHEET - News data
    getDataForLayout2 = (): any => {
        return {
            "headerTitle": "News",
            "headerImage": "assets/images/background-small/3.jpg",
            "title": "Infinit bridge made in China. Locals said that is not possible to see end of bridge. 7 people lost during walk.",
            "subtitle": "by Name Surname",
            "category": "ENGINEERING",
            "avatar": "assets/images/avatar/3.jpg",
            "shareIcon": "more",
            "actionSheet": {
                "buttons": [
                    {
                        "text": "Add to Cart",
                        "role": "destructive"
                    },
                    {
                        "text": "Add to Favorites"
                    },
                    {
                        "text": "Read more info"
                    },
                    {
                        "text": "Delete Item"
                    },
                    {
                        "text": "Cancel",
                        "role": "cancel"
                    }
                ]
            },
            "items": [
                {
                    "id": 1,
                    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    "id": 2,
                    "title": "Lorem ipsum dolor sit amet",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    "id": 3,
                    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                },
                {
                    "id": 4,
                    "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                }
            ]
        };
    };

    // ACTION-SHEET - With Text Header data
    getDataForLayout3 = (): any => {
        return {
            "headerTitle": "With Text Header",
            "shareIcon": "more",
            "actionSheet": {
                "title": "Choose what to do with this card?",
                "buttons": [
                    {
                        "text": "Read more",
                        "role": "destructive"
                    },
                    {
                        "text": "Add to Favorites"
                    },
                    {
                        "text": "Delete Card"
                    },
                    {
                        "text": "Disable Card"
                    },
                    {
                        "text": "Cancel",
                        "role": "cancel"
                    }
                ]
            },
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

    getEventsForTheme = (menuItem: any): any => {
      var that = this;
        return {
            'onItemClick': function (item: any) {
                  that.toastCtrl.presentToast(item.title);
            },
            'onItemClickActionSheet': function (item: any) {
                  that.toastCtrl.presentToast(item.button.text);
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
    }

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('actionSheet/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                        that.loadingService.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        that.loadingService.hide();
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
