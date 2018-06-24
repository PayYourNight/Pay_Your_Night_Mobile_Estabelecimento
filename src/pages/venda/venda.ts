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

 
  constructor(public navCtrl: NavController) { }

  openQRcodePage() {
    this.navCtrl.push(QrcodeReaderConsumoPage);
  }

  simularLeitura(): any {
    this.navCtrl.push(BuscaProdutosVendaPage);
  }

  
}
