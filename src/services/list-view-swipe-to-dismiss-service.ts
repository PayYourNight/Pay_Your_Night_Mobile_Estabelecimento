import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class ListViewSwipeToDismissService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'swipeToDismiss';

    getTitle = (): string => 'Swipe to dismiss';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Small item + header", "theme"  : "layout1"},
          {"title" : "Products + CTA", "theme"  : "layout2"},
          {"title" : "Full width image", "theme"  : "layout3"}
        ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    // SWIPE TO DISMISS - Small item + header data
    getDataForLayout1 = (): any => {
        return {
            "header": "Inbox",
            "title": "12 new mesages",
            "subtitle": "Mark all messages as read.",
            "button": "ok",
            "items": [
                {
                    "id": 1,
                    "title": "Grant Marshall",
                    "subtitle": "Subtitle",
                    "textIcon": "6min ago",
                    "icon": "ios-information-circle-outline",
                    "delate": "Delete",
                    "reply": "Reply"
                },
                {
                    "id": 2,
                    "title": "Pena Valdez",
                    "subtitle": "Subtitle",
                    "textIcon": "58min ago",
                    "icon": "ios-information-circle-outline",
                    "delate": "Delete",
                    "reply": "Reply"
                },
                {
                    "id": 3,
                    "title": "Jessica Miles",
                    "subtitle": "Subtitle",
                    "textIcon": "92min ago",
                    "icon": "ios-information-circle-outline",
                    "delate": "Delete",
                    "reply": "Reply"
                },
                {
                    "id": 4,
                    "title": "Kerri Barber",
                    "subtitle": "Subtitle",
                    "textIcon": "93min ago",
                    "icon": "ios-information-circle-outline",
                    "delate": "Delete",
                    "reply": "Reply"
                },
                {
                    "id": 5,
                    "title": "Natasha Gamble",
                    "subtitle": "Subtitle",
                    "textIcon": "43min ago",
                    "icon": "ios-information-circle-outline",
                    "delate": "Delete",
                    "reply": "Reply"
                },
                {
                    "id": 6,
                    "title": "White Castaneda",
                    "subtitle": "Subtitle",
                    "textIcon": "62min ago",
                    "icon": "ios-information-circle-outline",
                    "delate": "Delete",
                    "reply": "Reply"
                },
                {
                    "id": 7,
                    "title": "Vanessa Ryan",
                    "subtitle": "Subtitle",
                    "textIcon": "81min ago",
                    "icon": "ios-information-circle-outline",
                    "delate": "Delete",
                    "reply": "Reply"
                },
                {
                    "id": 8,
                    "title": "Meredith Hendricks",
                    "subtitle": "Subtitle",
                    "textIcon": "51min ago",
                    "icon": "ios-information-circle-outline",
                    "delate": "Delete",
                    "reply": "Reply"
                }
            ]
        };
    };

    // SWIPE TO DISMISS - Products + CTA data
    getDataForLayout2 = (): any => {
        return {
            "header": "Following",
            "items": [
                {
                    "id": 1,
                    "title": "Grant Marshall",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/images/avatar/17.jpg",
                    "ionBadge": "follow",
                    "delate": "Delete"
                },
                {
                    "id": 2,
                    "title": "Pena Valdez",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/images/avatar/18.jpg",
                    "ionBadge": "follow",
                    "delate": "Delete"
                },
                {
                    "id": 3,
                    "title": "Jessica Miles",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/images/avatar/19.jpg",
                    "ionBadge": "follow",
                    "delate": "Delete"
                },
                {
                    "id": 4,
                    "title": "Kerri Barber",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/images/avatar/20.jpg",
                    "ionBadge": "follow",
                    "delate": "Delete"
                },
                {
                    "id": 5,
                    "title": "Natasha Gamble",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/images/avatar/21.jpg",
                    "ionBadge": "follow",
                    "delate": "Delete"
                },
                {
                    "id": 6,
                    "title": "White Castaneda",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/images/avatar/22.jpg",
                    "ionBadge": "follow",
                    "delate": "Delete"
                },
                {
                    "id": 7,
                    "title": "Vanessa Ryan",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/images/avatar/11.jpg",
                    "ionBadge": "follow",
                    "delate": "Delete"
                },
                {
                    "id": 8,
                    "title": "Carol Kelly",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/images/avatar/17.jpg",
                    "ionBadge": "follow",
                    "delate": "Delete"
                },
                {
                    "id": 9,
                    "title": "Barrera Ramsey",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/images/avatar/18.jpg",
                    "ionBadge": "follow",
                    "delate": "Delete"
                }
            ]
        };
    };

    // SWIPE TO DISMISS - Full width image data
    getDataForLayout3 = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "title": "Free Ride",
                    "subtitle": "Monday, 15th Oct. 2017",
                    "image": "assets/images/background/4.jpg",
                    "delate": "Delete"
                },
                {
                    "id": 2,
                    "title": "Main Stage Event",
                    "subtitle": "Thursday, 20th Feb. 2017",
                    "image": "assets/images/background/0.jpg",
                    "delate": "Delete"
                },
                {
                    "id": 3,
                    "title": "Mountain Tour",
                    "subtitle": "Friday, 10th Aug. 2017",
                    "image": "assets/images/background/3.jpg",
                    "delate": "Delete"
                },
                {
                    "id": 4,
                    "title": "Sea Tour",
                    "subtitle": "Wednesday, 17th May 2016",
                    "image": "assets/images/background/5.jpg",
                    "delate": "Delete"
                },
                {
                    "id": 5,
                    "title": "Open Air Concert",
                    "subtitle": "Sunday, 11th June 2017",
                    "image": "assets/images/background/6.jpg",
                    "delate": "Delete"
                },
                {
                    "id": 6,
                    "title": "Bridge Tour",
                    "subtitle": "Friday, 10th Jan. 2017",
                    "image": "assets/images/background/1.jpg",
                    "delate": "Delete"
                }
            ]
        };
    };


    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            'onItemClick': function(item: any) {
                  that.toastCtrl.presentToast(item);
            },
            'onDelete': function(item: any) {
                  that.toastCtrl.presentToast("Delete " + item.title);
            },
            'onButtonGetClick': function(item: any) {
                  that.toastCtrl.presentToast("Like");
            }
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
                    .object('listView/swipeToDismiss/' + item.theme)
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
