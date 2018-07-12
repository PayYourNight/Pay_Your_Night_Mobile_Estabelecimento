import { ErrorHandler, Injectable } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import * as Sentry from 'sentry-cordova';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Injectable()
export class MyErrorHandler extends IonicErrorHandler implements ErrorHandler {

  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController) {
    super();
  }

  handleError(err: any): void {
    if (err.status == 500) {
      console.log('Error: ' + err);
      Sentry.captureException(err);
      this.presentAlert(err.message);
      this.presentToast();
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: "Desculpe, alguma coisa saiu errada :(",
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: msg,
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
