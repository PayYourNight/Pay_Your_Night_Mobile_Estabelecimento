//ionic serve -p 8101 -r 8102 --dev-logger-port 8103
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { CheckinProvider } from '../../providers/checkin';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { ConsumoProvider } from '../../providers/consumo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private socket: Socket,
    private checkin: CheckinProvider,
    private toastCtrl: ToastController,
    private consumo: ConsumoProvider) {

  }

  sendMessageCheckinMOCK() {
    console.log('realizando checkin mock');   
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

 

  sendMessageConsumoMOCK() {
    this.consumo.addConsumo(JSON.stringify({  
   "usuario_id": "5b2ddebc2f2a7b271811b206", 
      "usuarioresp_id": "5b2de0f12f2a7b271811b207",
      "produtosConsumo": [
        {
          "quantidade": 2,
          "produto_id": "5b2eebf5bf8af2428c8c41fd",
          "produto_descricao": "Heineken 600",
          "produto_valor": 12
        },
        {
          "quantidade": 2,
          "produto_id": "5b2eec70bf8af2428c8c41fe",
          "produto_descricao": "Brahma 600",
          "produto_valor": 12
        },
        {
          "quantidade": 2,
          "produto_id": "5b2eecbb7627223b2419c07e",
          "produto_descricao": "Skol 600",
          "produto_valor": 12
        }
      ]
    })).subscribe(
      (data) => {
        console.log(data);
        (error) => {
          console.log(error);
        }
      });
    this.socket.emit("consumo", 'consumo realizado');    
  }

  sendMessageCheckoutMOCK(){
    this.socket.emit("checkout", 'checkout realizado');
  }

}
