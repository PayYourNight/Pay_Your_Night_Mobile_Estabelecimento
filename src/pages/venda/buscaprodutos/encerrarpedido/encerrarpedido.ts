import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-encerrarpedido',
  templateUrl: 'encerrarpedido.html'
})
export class EncerrarPedidoPage {

  arrItensPedido: Array<Object> = [];

  constructor(    
    public navCtrl: NavController,
    public params: NavParams
  ) {    
    this.arrItensPedido = params.get("itens");
    console.log(this.arrItensPedido);
  }

  finalizar() {



  }
}
