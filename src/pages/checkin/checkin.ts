import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
 
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html'
})
export class CheckinPage {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  userId = '28383794-7ab5-41a8-8272-9fc18f8df786';
 
  constructor(private barcodeScanner: BarcodeScanner, public viewCtrl: ViewController) { }
  
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}