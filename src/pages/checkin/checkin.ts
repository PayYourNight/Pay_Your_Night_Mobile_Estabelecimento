import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Socket } from 'ng-socket-io';
import { CheckinService } from './checkin.service'

@Component({
  selector: 'page-checkin',
  templateUrl: 'checkin.html'
})
export class CheckinPage {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  usuarioId = '28383794-7ab5-41a8-8272-9fc18f8df786';
  estabelecimentoId = '28383794-7ab5-41a8-8272-9fc18f8df786';
  transactionId = '28383794-7ab5-41a8-8272-9fc18f8df786'
  estabelecimentoNome = 'Estabelecimento Teste Socket';

  constructor(
    private barcodeScanner: BarcodeScanner, 
    public viewCtrl: ViewController,
    private socket: Socket,
    private service: CheckinService
  ) { 

    socket.emit('checkinConnect', {
      user: this.usuarioId,
      role: 'caixa',
      details: {
        estabelecimento: {
          id : this.estabelecimentoId,
          nome: this.estabelecimentoNome
        }
      }
    });
  }
  
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      
      //TODO
      this.criarCheckinBD()

      this.emitirMensagemServidor();
      
    }, (err) => {
        console.log('Error: ', err);
    });
  }

  simularCheckin(){          
      this.criarCheckinBD()

      this.emitirMensagemServidor();
  }

  criarCheckinBD(){
    this.service.criarCheckin(this.usuarioId, this.estabelecimentoId, this.transactionId);    
  }

  emitirMensagemServidor(){
    this.socket.emit("checkin", { 
      "estabelecimentoId": this.estabelecimentoId,
      "transactionId": this.transactionId 
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}