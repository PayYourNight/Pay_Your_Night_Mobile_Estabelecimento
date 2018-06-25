import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ConsumoProvider } from '../../../../providers/consumo';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'page-encerrarpedido',
  templateUrl: 'encerrarpedido.html'
})
export class EncerrarPedidoPage {
  //TODO
  usuario_id = "5b2ddebc2f2a7b271811b206";
  usuarioresp_id = "5b2ddebc2f2a7b271811b206";
  arrProdutos: any = null;
  

  constructor(    
    public navCtrl: NavController,
    public params: NavParams,
    private consumo: ConsumoProvider,
    private toastCtrl: ToastController,
    private socket: Socket
  ) {    
    this.arrProdutos = params.get("itens");
    var arrItensPedidoSelecionados: any = [];

    this.arrProdutos.forEach(function (item) {
      console.log(item);
      arrItensPedidoSelecionados.push({
        isQtdInvalida: false,
        quantidade: 5,
        produto_id: item._id,
        produto_descricao: item.descricao,
        produto_valor: item.valor
      });
    });

    this.arrProdutos = arrItensPedidoSelecionados;
  }

  finalizar() {
    //if (this.validar()) {
      
    this.consumo.addConsumo({
      usuario_id: this.usuario_id,
      //TODO
      usuarioresp_id: this.usuarioresp_id,
        produtosConsumo: this.arrProdutos
      }).subscribe(
        (data) => {
          console.log(data);
          this.socket.emit("consumo", 'consumo realizado');    
          this.presentToast("Pedido incluído com sucesso. :)")
          this.navCtrl.popToRoot()
        },
        (error) => {
          this.presentToast(error.error.message)
        }
      );

    //}
  }

  presentToast(descricao) {
    let toast = this.toastCtrl.create({
      message: descricao,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

  validar(): any {
    this.arrProdutos.forEach(function (item) {
      if (item.quantidade == "" || item.quantidade == 0) {
        item.isQtdInvalida = true;
      }
    });
  }
}

