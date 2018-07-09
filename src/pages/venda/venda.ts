import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QrcodeReaderConsumoPage } from './barcodereader_consumo/barcodereader_consumo';
import { BuscaProdutosVendaPage } from './buscaprodutos/buscaprodutos';
 
@Component({
  selector: 'page-venda',
  templateUrl: 'venda.html'
})
export class VendaPage {
  user_id: string;

  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner, 
  ) { }

  scanCode() {
    this.barcodeScanner.scan().then((barcodeData) => {      
      var code: any = barcodeData.text;
      var split: Array<string> = code.split("|");
      this.user_id = split[0];
      this.buscarProdutos();
    }, (err) => {
      throw new Error(err);
    });
  }

  openQRcodePage() {
    this.navCtrl.push(QrcodeReaderConsumoPage);
  }

  buscarProdutos(): any {
    this.navCtrl.push(BuscaProdutosVendaPage, { usuario: this.user_id });
  } 
}
