import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-checkin',
  templateUrl: 'checkin.html'
})
export class CheckinPage {

  constructor(
    private navCtrl :NavController,
    private barcodeScanner: BarcodeScanner
  ) {}

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      //this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }

}