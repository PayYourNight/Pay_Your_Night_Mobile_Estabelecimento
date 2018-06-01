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

  sendMessageCheckinMOCK(){
    this.socket.emit("checkin", "checkin realizado");
  }

  sendMessageCheckoutMOCK(){
    this.socket.emit("checkout", "checkout realizado");
  }
  
  sendMessageConsumoMOCK(){
    this.socket.emit("message", "consumo realizado");
  }

}
