import { Component } from '@angular/core';
import { ViewController, ToastController, ModalController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Socket } from 'ng-socket-io';
import { CheckinService } from './checkin.service'
import { User } from '../../providers/interfaces/user';

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
    private service: CheckinService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController
  ) { 
    
    let user = localStorage.getItem('user');
    //this.estabelecimentoId = user.estabelecimento

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

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(ModalConfirmacaoPage);
    profileModal.present();
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
    this.service.criarCheckin(this.usuarioId, this.estabelecimentoId, this.transactionId)
    .subscribe(
      (data) => {
        if (data){

        }
      });   
  }

  emitirMensagemServidor(){
    this.socket.emit("checkin", { 
      "estabelecimentoId": this.estabelecimentoId,
      "transactionId": this.transactionId 
    });
  }

  // presentToast() {
  //   let toast = this.toastCtrl.create({
  //     message: 'Check-in realizado com sucesso.',
  //     position: 'top',
  //     duration: 3000
  //   });
  //   toast.present();
  // }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

/*********************************/

@Component({
  selector: 'page-modal-confirmacao',
  templateUrl: 'modal-confirmacao.html'
})
export class ModalConfirmacaoPage {
  constructor(public viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}