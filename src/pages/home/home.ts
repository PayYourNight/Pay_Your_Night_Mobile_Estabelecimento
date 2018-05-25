//ionic serve -p 8101 -r 8102 --dev-logger-port 8103
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {
      id : '28383794-7ab5-41a8-8272-9fc18f8df786',
      role : 'caixa'
  }
  estabelecimentoID = '28383794-7ab5-41a8-8272-9fc18f8df786';
  estabelecimentoNome = 'Estabelecimento Teste Socket';


  constructor(public navCtrl: NavController, private socket: Socket) {

    socket.emit('checkinConnect', {      
      user: this.user,      
      details: {
        estabelecimento: {
          id : this.estabelecimentoID,
          nome: this.estabelecimentoNome
        }
      }
    });

  }

  sendMessageCheckin(){
    this.socket.emit("checkin", 'checkin realizado');
  }

  sendMessageCheckout(){
    this.socket.emit("checkout", 'checkout realizado');
  }

  sendMessageConsumo(){
    this.socket.emit("consumo", 'consumo realizado');
  }

}
