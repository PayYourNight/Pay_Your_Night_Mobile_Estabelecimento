import { Component } from '@angular/core';
import { ViewController, NavController  } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BuscaProdutosVendaPage } from '../buscaprodutos/buscaprodutos';


@Component({
  selector: 'page-qrcode-consumo',
  templateUrl: 'barcodereader_consumo.html'
})
export class QrcodeReaderConsumoPage {

  constructor(
    private barcodeScanner: BarcodeScanner,
    public viewCtrl: ViewController,
    public navCtrl: NavController
  ) {
  }

  scanCode() {
    this.barcodeScanner.scan()
      .then(barcodeData => {
      if (barcodeData) {
        console.log('leitura de codigo de barra efeituada');
        console.log(barcodeData);
        //var id = barcodeData.split("|")[0];

        this.abrirBuscaProdutos(barcodeData);
      }
    }, (err) => {
      console.log('Error: ', err);
    });
  }

  abrirBuscaProdutos(barcodeData: any): any {
    var usuario_id = barcodeData.split("|")[0];
    this.navCtrl.push(BuscaProdutosVendaPage, {
      usuario_id: barcodeData.usuario_id
    });
  }
}
