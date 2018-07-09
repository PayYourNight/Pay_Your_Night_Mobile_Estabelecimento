import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CheckinProvider } from '../../providers/checkin';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Socket } from 'ng-socket-io';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-checkin',
  templateUrl: 'checkin.html'
})
export class CheckinPage {
  user: any;
  user_id: string;
  constructor(
    private barcodeScanner: BarcodeScanner,
    public viewCtrl: ViewController,
    private socket: Socket,
    private checkin: CheckinProvider,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {

    this.user = localStorage.getItem('user');

  }

  scanCode() {
    try {
      this.barcodeScanner.scan()
        .then((barcodeData) => {
          console.log(barcodeData.text);
          if (barcodeData) {
            var code: string = barcodeData.text;
            this.presentAlert(code);
            var split: Array<string> = code.split("|");
            this.user_id = split[0];
            this.gravarCheckin();
          }
      }, (err) => {
        throw new Error(err);
      });
    }
    catch (e) {
      throw new Error(e);
    }
  }

  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'error test',
      subTitle: msg,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  gravarCheckin(): any {
    console.log('gravando chekin no banco mock');
    this.checkin.doCheckin(this.user_id).subscribe(
      (data) => {
        this.emitirSocketCheckin();
        this.presentToast("Parabéns! Chekin realizado.");
      },
      (error) => {        
        if (error.error.message == "Usuário possui um check-in ativo.") {
          this.presentToast(error.error.message);
        } else {
          throw new Error(error);
        }
      });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

  emitirSocketCheckin(): any {
    this.socket.emit("checkin", {
      type: 'checkin',
      text: 'check-in realizado!',
      created: Date.now(),
      estabelecimento: {
        estabelecimento_id: this.user.estabelecimento_id,
        estabelecimento_nome: this.user.estabelecimento_nome
      }
    });
  }

}
