import { Component } from '@angular/core';
import { ViewController, NavController, AlertController } from 'ionic-angular';
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
  usuario_id: string; 
  arrProdutos: any = null;
 
  constructor(    
    public navCtrl: NavController,
    public params: NavParams,
    private consumo: ConsumoProvider,
    private toastCtrl: ToastController,
    private socket: Socket,
    private alertCtrl: AlertController
  ) {    
    this.arrProdutos = params.get("itens");
    this.usuario_id = params.get("usuario");

    var arrItensPedidoSelecionados: any = [];

    this.arrProdutos.forEach(function (item) {
      arrItensPedidoSelecionados.push({
        isQtdInvalida: false,
        quantidade: 0,
        produto_id: item._id,
        produto_descricao: item.descricao,
        produto_valor: item.valor
      });
    });

    this.arrProdutos = arrItensPedidoSelecionados;
  }

  finalizar() {
    if (this.ehValido()) {
      this.presentConfirm();
    }
  }

  fazerPedido() {
    this.consumo.addConsumo({
      usuario_id: this.usuario_id,
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
      });
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirmação',
      message: 'Deseja finalizar o pedido?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Finalizar',
          handler: () => {
            this.fazerPedido();
          }
        }
      ]
    });
    alert.present();
  }

  presentToast(descricao) {
    let toast = this.toastCtrl.create({
      message: descricao,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

  ehValido(): boolean {
    var result: boolean = true;
    this.arrProdutos.forEach(function (item) {
      if (item.quantidade == "" || item.quantidade == 0) {
        item.isQtdInvalida = true;
        result = false;
      }
    });

    return result;
  }
}

