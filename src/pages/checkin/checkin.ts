import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CheckinProvider } from '../../providers/checkin';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Socket } from 'ng-socket-io';

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
    private toastCtrl: ToastController
  ) {

    this.user = localStorage.getItem('user');

  }

  scanCode() {
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log(barcodeData);
      var code: any = barcodeData;
      var split: Array<string> = code.split("|");
      this.user_id = split[0];
      this.gravarCheckin();
    }, (err) => {
      throw new Error(err);
    });
  }

  gravarCheckin(): any {
    console.log('gravando chekin no banco mock');
    this.checkin.doCheckin(this.user_id).subscribe(
      (data) => {
        this.emitirSocketCheckin();
        this.presentToast("Parabéns! Chekin realizado.");
      },
      (error) => {
        console.log(error.error.message);
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
