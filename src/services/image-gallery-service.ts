import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { LoadingService } from './loading-service'

@Injectable()
export class ImageGalleryService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) {}

    getId = ():string => 'imageGallery';

    getTitle = ():string => 'Image Gallery';

    getAllThemes = (): Array<any> => {
      return [
        {"title" : "Full gallery 1", "theme"  : "layout1"},
        {"title" : "Thumb grid", "theme"  : "subcategory"},
        {"title" : "Full gallery 2", "theme"  : "layout3"}
      ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
      return this[
                'getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)
      ]();
    };

    // IMAGES-GALLARY - Full gallery 1 data
    getDataForLayout1 = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "title": "Brogan",
                    "image": "assets/images/gallery/brogan/0.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/brogan/14.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/brogan/2.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/brogan/6.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/brogan/4.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/brogan/15.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/brogan/6.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/brogan/7.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/brogan/13.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/brogan/9.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/brogan/10.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/brogan/11.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/brogan/12.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/brogan/13.jpg"
                        },
                        {
                            "id": 14,
                            "image": "assets/images/gallery/brogan/7.jpg"
                        },
                        {
                            "id": 15,
                            "image": "assets/images/gallery/brogan/5.jpg"
                        },
                        {
                            "id": 16,
                            "image": "assets/images/gallery/brogan/16.jpg"
                        }
                    ]
                },
                {
                    "id": 2,
                    "title": "Rehrersburg",
                    "image": "assets/images/gallery/brogan/1.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/brogan/2.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/brogan/5.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/brogan/6.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/brogan/7.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/brogan/8.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/brogan/14.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/brogan/3.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/brogan/4.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/brogan/9.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/brogan/10.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/brogan/11.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/brogan/12.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/brogan/2.jpg"
                        },
                        {
                            "id": 14,
                            "image": "assets/images/gallery/brogan/9.jpg"
                        },
                        {
                            "id": 15,
                            "image": "assets/images/gallery/brogan/15.jpg"
                        },
                        {
                            "id": 16,
                            "image": "assets/images/gallery/brogan/0.jpg"
                        }
                    ]
                },
                {
                    "id": 3,
                    "title": "Durham",
                    "image": "assets/images/gallery/brogan/18.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/brogan/7.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/brogan/8.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/brogan/9.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/brogan/10.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/brogan/11.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/brogan/14.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/brogan/3.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/brogan/4.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/brogan/9.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/brogan/10.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/brogan/11.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/brogan/12.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/brogan/2.jpg"
                        },
                        {
                            "id": 14,
                            "image": "assets/images/gallery/brogan/19.jpg"
                        },
                        {
                            "id": 15,
                            "image": "assets/images/gallery/brogan/18.jpg"
                        }
                    ]
                },
                {
                    "id": 4,
                    "title": "Callaghan",
                    "image": "assets/images/gallery/brogan/20.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/brogan/10.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/brogan/11.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/brogan/12.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/brogan/13.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/brogan/14.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/brogan/15.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/brogan/16.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/brogan/17.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/brogan/19.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/brogan/18.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/brogan/1.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/brogan/3.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/brogan/2.jpg"
                        },
                        {
                            "id": 14,
                            "image": "assets/images/gallery/brogan/4.jpg"
                        },
                        {
                            "id": 15,
                            "image": "assets/images/gallery/brogan/5.jpg"
                        }
                    ]
                },
                {
                    "id": 5,
                    "title": "Manitou",
                    "image": "assets/images/gallery/brogan/17.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/brogan/1.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/brogan/2.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/brogan/12.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/brogan/13.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/brogan/16.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/brogan/15.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/brogan/20.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/brogan/17.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/brogan/19.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/brogan/18.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/brogan/10.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/brogan/3.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/brogan/2.jpg"
                        },
                        {
                            "id": 14,
                            "image": "assets/images/gallery/brogan/4.jpg"
                        },
                        {
                            "id": 15,
                            "image": "assets/images/gallery/brogan/5.jpg"
                        }
                    ]
                },
                {
                    "id": 6,
                    "title": "Weedville",
                    "image": "assets/images/gallery/brogan/3.jpg",
                    "favorite": true,
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/brogan/20.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/brogan/19.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/brogan/12.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/brogan/13.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/brogan/16.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/brogan/15.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/brogan/5.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/brogan/17.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/brogan/19.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/brogan/18.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/brogan/10.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/brogan/3.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/brogan/2.jpg"
                        },
                        {
                            "id": 14,
                            "image": "assets/images/gallery/brogan/4.jpg"
                        },
                        {
                            "id": 15,
                            "image": "assets/images/gallery/brogan/5.jpg"
                        },
                        {
                            "id": 16,
                            "image": "assets/images/gallery/brogan/0.jpg"
                        },
                        {
                            "id": 17,
                            "image": "assets/images/gallery/brogan/1.jpg"
                        }
                    ]
                },
                {
                    "id": 7,
                    "title": "Curtice",
                    "image": "assets/images/gallery/brogan/1.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/brogan/3.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/brogan/5.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/brogan/4.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/brogan/7.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/brogan/8.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/brogan/14.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/brogan/20.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/brogan/4.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/brogan/9.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/brogan/10.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/brogan/8.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/brogan/12.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/brogan/2.jpg"
                        },
                        {
                            "id": 14,
                            "image": "assets/images/gallery/brogan/9.jpg"
                        },
                        {
                            "id": 15,
                            "image": "assets/images/gallery/brogan/15.jpg"
                        },
                        {
                            "id": 16,
                            "image": "assets/images/gallery/brogan/0.jpg"
                        }
                    ]
                },
                {
                    "id": 8,
                    "title": "Barronett",
                    "image": "assets/images/gallery/brogan/19.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/brogan/1.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/brogan/2.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/brogan/12.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/brogan/13.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/brogan/16.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/brogan/15.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/brogan/20.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/brogan/17.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/brogan/19.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/brogan/18.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/brogan/10.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/brogan/3.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/brogan/2.jpg"
                        },
                        {
                            "id": 14,
                            "image": "assets/images/gallery/brogan/4.jpg"
                        },
                        {
                            "id": 15,
                            "image": "assets/images/gallery/brogan/5.jpg"
                        }
                    ]
                }
            ]
        };
      };

      // IMAGES-GALLARY - Thumb grid data
      getDataForSubcategory = (): any => {
          return {
              "items": [
                  {
                      "id": 1,
                      "image": "assets/images/gallery/brogan/16.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/images/gallery/brogan/15.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/images/gallery/brogan/13.jpg"
                  },
                  {
                      "id": 4,
                      "image": "assets/images/gallery/brogan/7.jpg"
                  },
                  {
                      "id": 5,
                      "image": "assets/images/gallery/brogan/8.jpg"
                  },
                  {
                      "id": 6,
                      "image": "assets/images/gallery/brogan/14.jpg"
                  },
                  {
                      "id": 7,
                      "image": "assets/images/gallery/brogan/20.jpg"
                  },
                  {
                      "id": 8,
                      "image": "assets/images/gallery/brogan/4.jpg"
                  },
                  {
                      "id": 9,
                      "image": "assets/images/gallery/brogan/9.jpg"
                  },
                  {
                      "id": 10,
                      "image": "assets/images/gallery/brogan/10.jpg"
                  },
                  {
                      "id": 11,
                      "image": "assets/images/gallery/brogan/8.jpg"
                  },
                  {
                      "id": 12,
                      "image": "assets/images/gallery/brogan/12.jpg"
                  },
                  {
                      "id": 13,
                      "image": "assets/images/gallery/brogan/2.jpg"
                  },
                  {
                      "id": 14,
                      "image": "assets/images/gallery/brogan/9.jpg"
                  },
                  {
                      "id": 15,
                      "image": "assets/images/gallery/brogan/15.jpg"
                  },
                  {
                      "id": 16,
                      "image": "assets/images/gallery/brogan/0.jpg"
                  }
              ]
          };
      };

      // IMAGES-GALLARY - Full gallery 2 data
      getDataForLayout3 = ():any => {
          return {
              "items": [
                  {
                      "id": 1,
                      "title": "Nutrioso",
                      "subtitle": "Friday, August 07, 2017",
                      "image": "assets/images/gallery/nutrioso/15.jpg",
                      "items": [
                          {
                              "id": 1,
                              "image": "assets/images/gallery/nutrioso/1.jpg"
                          },
                          {
                              "id": 2,
                              "image": "assets/images/gallery/nutrioso/4.jpg"
                          },
                          {
                              "id": 3,
                              "image": "assets/images/gallery/nutrioso/7.jpg"
                          },
                          {
                              "id": 4,
                              "image": "assets/images/gallery/nutrioso/12.jpg"
                          },
                          {
                              "id": 5,
                              "image": "assets/images/gallery/nutrioso/17.jpg"
                          },
                          {
                              "id": 6,
                              "image": "assets/images/gallery/nutrioso/20.jpg"
                          }
                      ]
                  },
                  {
                      "id": 2,
                      "title": "Bluetown",
                      "subtitle": "Wednesday, July 05, 2017",
                      "image": "assets/images/gallery/bluetown/11.jpg",
                      "items": [
                          {
                              "id": 1,
                              "image": "assets/images/gallery/bluetown/20.jpg"
                          },
                          {
                              "id": 2,
                              "image": "assets/images/gallery/bluetown/19.jpg"
                          },
                          {
                              "id": 3,
                              "image": "assets/images/gallery/bluetown/18.jpg"
                          },
                          {
                              "id": 4,
                              "image": "assets/images/gallery/bluetown/17.jpg"
                          },
                          {
                              "id": 5,
                              "image": "assets/images/gallery/bluetown/16.jpg"
                          },
                          {
                              "id": 6,
                              "image": "assets/images/gallery/bluetown/15.jpg"
                          },
                          {
                              "id": 7,
                              "image": "assets/images/gallery/bluetown/14.jpg"
                          },
                          {
                              "id": 8,
                              "image": "assets/images/gallery/bluetown/13.jpg"
                          },
                          {
                              "id": 9,
                              "image": "assets/images/gallery/bluetown/12.jpg"
                          },
                          {
                              "id": 10,
                              "image": "assets/images/gallery/bluetown/11.jpg"
                          },
                          {
                              "id": 11,
                              "image": "assets/images/gallery/bluetown/10.jpg"
                          },
                          {
                              "id": 12,
                              "image": "assets/images/gallery/bluetown/9.jpg"
                          },
                          {
                              "id": 13,
                              "image": "assets/images/gallery/bluetown/8.jpg"
                          },
                          {
                              "id": 14,
                              "image": "assets/images/gallery/bluetown/7.jpg"
                          }
                      ]
                  },
                  {
                      "id": 3,
                      "title": "Fairhaven",
                      "subtitle": "Sunday, October 08, 2016",
                      "image": "assets/images/gallery/fairhaven/16.jpg",
                      "items": [
                          {
                              "id": 1,
                              "image": "assets/images/gallery/fairhaven/4.jpg"
                          },
                          {
                              "id": 2,
                              "image": "assets/images/gallery/fairhaven/5.jpg"
                          },
                          {
                              "id": 3,
                              "image": "assets/images/gallery/fairhaven/6.jpg"
                          },
                          {
                              "id": 4,
                              "image": "assets/images/gallery/fairhaven/7.jpg"
                          },
                          {
                              "id": 5,
                              "image": "assets/images/gallery/fairhaven/17.jpg"
                          },
                          {
                              "id": 6,
                              "image": "assets/images/gallery/fairhaven/18.jpg"
                          },
                          {
                              "id": 7,
                              "image": "assets/images/gallery/fairhaven/19.jpg"
                          },
                          {
                              "id": 8,
                              "image": "assets/images/gallery/fairhaven/20.jpg"
                          }
                      ]
                  },
                  {
                      "id": 4,
                      "title": "Fredericktown",
                      "subtitle": "Monday, June 26, 2017",
                      "image": "assets/images/gallery/fredericktown/11.jpg",
                      "items": [
                          {
                              "id": 1,
                              "image": "assets/images/gallery/fredericktown/16.jpg"
                          },
                          {
                              "id": 2,
                              "image": "assets/images/gallery/fredericktown/15.jpg"
                          },
                          {
                              "id": 3,
                              "image": "assets/images/gallery/fredericktown/14.jpg"
                          },
                          {
                              "id": 4,
                              "image": "assets/images/gallery/fredericktown/13.jpg"
                          },
                          {
                              "id": 5,
                              "image": "assets/images/gallery/fredericktown/12.jpg"
                          },
                          {
                              "id": 6,
                              "image": "assets/images/gallery/fredericktown/11.jpg"
                          },
                          {
                              "id": 7,
                              "image": "assets/images/gallery/fredericktown/10.jpg"
                          },
                          {
                              "id": 8,
                              "image": "assets/images/gallery/fredericktown/9.jpg"
                          },
                          {
                              "id": 9,
                              "image": "assets/images/gallery/fredericktown/8.jpg"
                          }
                      ]
                  },
                  {
                      "id": 5,
                      "title": "Caledonia",
                      "subtitle": "Thursday, May 19, 2016",
                      "image": "assets/images/gallery/caledonia/3.jpg",
                      "items": [
                          {
                              "id": 1,
                              "image": "assets/images/gallery/caledonia/0.jpg"
                          },
                          {
                              "id": 2,
                              "image": "assets/images/gallery/caledonia/1.jpg"
                          },
                          {
                              "id": 3,
                              "image": "assets/images/gallery/caledonia/2.jpg"
                          },
                          {
                              "id": 4,
                              "image": "assets/images/gallery/caledonia/3.jpg"
                          },
                          {
                              "id": 5,
                              "image": "assets/images/gallery/caledonia/4.jpg"
                          },
                          {
                              "id": 6,
                              "image": "assets/images/gallery/caledonia/5.jpg"
                          },
                          {
                              "id": 7,
                              "image": "assets/images/gallery/caledonia/6.jpg"
                          },
                          {
                              "id": 8,
                              "image": "assets/images/gallery/caledonia/7.jpg"
                          },
                          {
                              "id": 9,
                              "image": "assets/images/gallery/caledonia/17.jpg"
                          },
                          {
                              "id": 10,
                              "image": "assets/images/gallery/caledonia/18.jpg"
                          },
                          {
                              "id": 11,
                              "image": "assets/images/gallery/caledonia/19.jpg"
                          }
                      ]
                  },
                  {
                      "id": 6,
                      "title": "Bend",
                      "subtitle": "Monday, September 01, 2016",
                      "image": "assets/images/gallery/bend/14.jpg",
                      "items": [
                          {
                              "id": 1,
                              "image": "assets/images/gallery/bend/15.jpg"
                          },
                          {
                              "id": 2,
                              "image": "assets/images/gallery/bend/16.jpg"
                          },
                          {
                              "id": 3,
                              "image": "assets/images/gallery/bend/17.jpg"
                          },
                          {
                              "id": 4,
                              "image": "assets/images/gallery/bend/18.jpg"
                          },
                          {
                              "id": 5,
                              "image": "assets/images/gallery/bend/19.jpg"
                          },
                          {
                              "id": 6,
                              "image": "assets/images/gallery/bend/20.jpg"
                          }
                      ]
                  },
                  {
                      "id": 7,
                      "title": "Madrid",
                      "subtitle": "Tuesday, September 05, 2016",
                      "image": "assets/images/gallery/madrid/8.jpg",
                      "items": [
                          {
                              "id": 1,
                              "image": "assets/images/gallery/madrid/10.jpg"
                          },
                          {
                              "id": 2,
                              "image": "assets/images/gallery/madrid/12.jpg"
                          },
                          {
                              "id": 3,
                              "image": "assets/images/gallery/madrid/13.jpg"
                          },
                          {
                              "id": 4,
                              "image": "assets/images/gallery/madrid/15.jpg"
                          },
                          {
                              "id": 5,
                              "image": "assets/images/gallery/madrid/16.jpg"
                          },
                          {
                              "id": 6,
                              "image": "assets/images/gallery/madrid/17.jpg"
                          }
                      ]
                  },
                  {
                      "id": 8,
                      "title": "Fairacres",
                      "subtitle": "Saturday, April 25, 2016",
                      "image": "assets/images/gallery/fairacres/18.jpg",
                      "items": [
                          {
                              "id": 1,
                              "image": "assets/images/gallery/fairacres/12.jpg"
                          },
                          {
                              "id": 2,
                              "image": "assets/images/gallery/fairacres/13.jpg"
                          },
                          {
                              "id": 3,
                              "image": "assets/images/gallery/fairacres/14.jpg"
                          },
                          {
                              "id": 4,
                              "image": "assets/images/gallery/fairacres/15.jpg"
                          },
                          {
                              "id": 5,
                              "image": "assets/images/gallery/fairacres/16.jpg"
                          },
                          {
                              "id": 6,
                              "image": "assets/images/gallery/fairacres/11.jpg"
                          },
                          {
                              "id": 7,
                              "image": "assets/images/gallery/fairacres/10.jpg"
                          },
                          {
                              "id": 8,
                              "image": "assets/images/gallery/fairacres/9.jpg"
                          },
                          {
                              "id": 9,
                              "image": "assets/images/gallery/fairacres/8.jpg"
                          }
                      ]
                  }
              ]
          };
      };

    getEventsForTheme = (menuItem: any): any => {
      return {};
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

    getShowItemId = (item: any):string => {
        console.log(this.getId()  + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1));
        return this.getId()  + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    }

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('imageGallery/' + item.theme)
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
