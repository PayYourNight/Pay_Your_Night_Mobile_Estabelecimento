//ionic serve -p 8101 -r 8102 --dev-logger-port 8103
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { CheckinProvider } from '../../providers/checkin';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //user = {
  //    id : '28383794-7ab5-41a8-8272-9fc18f8df786',
  //    role : 'caixa'
  //}
  //estabelecimentoID = '28383794-7ab5-41a8-8272-9fc18f8df786';
  //estabelecimentoNome = 'Estabelecimento Teste Socket';
  //TODO
  private usuario_id = "5b2ddebc2f2a7b271811b206";

  constructor(
    public navCtrl: NavController,
    private socket: Socket,
    private checkin: CheckinProvider,
    private toastCtrl: ToastController) {

    //socket.emit('checkinConnect', {      
    //  user: this.user,      
    //  details: {
    //    estabelecimento: {
    //      id : this.estabelecimentoID,
    //      nome: this.estabelecimentoNome
    //    }
    //  }
    //});

  }

  sendMessageCheckinMOCK() {
    console.log('realizando checkin mock');
    this.gravarCheckin();
    
  }

  gravarCheckin(): any {
    console.log('gravando chekin no banco mock');
    this.checkin.doCheckin(this.usuario_id).subscribe(
      (data) => {
        this.emitirSocketCheckin();
        this.presentToast("Parabéns! Chekin realizado.");
    },
      (error) => {
        console.log(error.error.message);        
        if (error.error.message == "Usuário possui um check-in ativo.") {
          this.presentToast(error.error.message);
        } else {
          throw new Error();
        }        
      });    
  }

  emitirSocketCheckin(): any {
    this.socket.emit("checkin", {
      type: 'checkin',
      text: 'check-in realizado!',
      created: Date.now(),
      estabelecimento: {
        estabelecimento_id: '28383794-7ab5-41a8-8272-9fc18f8df786',
        estabelecimento_nome: 'Estabelecimento Teste Socket'
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

 

  sendMessageConsumoMOCK(){
    this.socket.emit("consumo", 'consumo realizado');    
  }

  sendMessageCheckoutMOCK(){
    this.socket.emit("checkout", 'checkout realizado');
  }

}
