import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Socket } from 'ng-socket-io';


@Component({
  selector: 'page-qrcode-checkin',
  templateUrl: 'qrcode-checkin.html'
})
export class QrcodeCheckinPage {
  constructor(
    private barcodeScanner: BarcodeScanner, 
    public viewCtrl: ViewController,
    private socket: Socket
  ) { 
    
    let user = localStorage.getItem('user');    

    // socket.emit('checkinConnect', {
    //   user: this.usuarioId,
    //   role: 'caixa',
    //   details: {
    //     estabelecimento: {
    //       id : this.estabelecimentoId,
    //       nome: this.estabelecimentoNome
    //     }
    //   }
    // });
  }

//   presentProfileModal() {
//     let profileModal = this.modalCtrl.create(ModalConfirmacaoPage);
//     profileModal.present();
//   }
  
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      //this.scannedCode = barcodeData.text;
      
      //TODO
      //this.criarCheckinBD()

      //this.emitirMensagemServidor();
      
    }, (err) => {
        console.log('Error: ', err);
    });
  }

//   simularCheckin(){          
//       this.criarCheckinBD()

//       this.emitirMensagemServidor();
//   }

//   criarCheckinBD(){
//     this.service.criarCheckin(this.usuarioId, this.estabelecimentoId, this.transactionId)
//     .subscribe(
//       (data) => {
//         if (data){

//         }
//       });   
//   }

//   emitirMensagemServidor(){
//     this.socket.emit("checkin", { 
//       "estabelecimentoId": this.estabelecimentoId,
//       "transactionId": this.transactionId 
//     });
//   }

  // presentToast() {
  //   let toast = this.toastCtrl.create({
  //     message: 'Check-in realizado com sucesso.',
  //     position: 'top',
  //     duration: 3000
  //   });
  //   toast.present();
  // }

//   dismiss() {
//     this.viewCtrl.dismiss();
//   }
}

/*********************************/

// @Component({
//   selector: 'page-modal-confirmacao',
//   templateUrl: 'modal-confirmacao.html'
// })
// export class ModalConfirmacaoPage {
//   constructor(public viewCtrl: ViewController) {
//   }

//   dismiss() {
//     this.viewCtrl.dismiss();
//   }
// }