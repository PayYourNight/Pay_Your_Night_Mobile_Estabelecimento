import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CheckoutProvider } from '../../providers/checkout/checkout';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Socket } from 'ng-socket-io';
 
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage {  
  usuario_id: any;
  scannedCode = null;
   
  constructor(
    private barcodeScanner: BarcodeScanner,
    public viewCtrl: ViewController,
    private checkout: CheckoutProvider,
    private alertCtrl: AlertController,
    private socket: Socket) {


  }
  
  scanCode() {
    this.barcodeScanner.scan().then(
      (barcodeData) => {
        this.usuario_id = barcodeData.text;
        this.presentAlert(this.usuario_id);
        this.doCheckout();
      },
      (err) => {
      throw new Error(err);
    });
  }

  doCheckout(): any {
    this.checkout.doCheckout(this.usuario_id)
      .subscribe(
      (data) => {
        if (data) {
          this.presentAlert("Usuário já realizou o pagamento");
        } else {
          this.presentAlert("Usuário ainda não realizou o pagamento");
        }
      },
      (error) => {
        throw new Error(error);
      })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Check-out',
      subTitle: msg,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  emitirSocketCheckout(): any {
    this.socket.emit("checkout", {
      type: 'checkout',
      text: 'check-out realizado!',
      created: Date.now(),
      usuario: {
        _id: this.usuario_id,        
      }
    });
  }
}
