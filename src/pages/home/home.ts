//ionic serve -p 8101 -r 8102 --dev-logger-port 8103
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private socket: Socket) {

  }

  sendMessageCheckin(){
    this.socket.emit("checkin", 'checkin realizado');
  }

  sendMessageCheckout(){
    this.socket.emit("checkout", 'checkout realizado');
  }

}
