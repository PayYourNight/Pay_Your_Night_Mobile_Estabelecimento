import { Component } from '@angular/core';
import { ViewController, NavController, AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ConsumoProvider } from '../../../../providers/consumo';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Socket } from 'ng-socket-io';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@Component({
  selector: 'page-encerrarpedido',
  templateUrl: 'encerrarpedido.html'
})
export class EncerrarPedidoPage {
  loading: any;
  //TODO
  usuario_id: string; 
  arrProdutos: any = null;
 
  constructor(    
    public navCtrl: NavController,
    public params: NavParams,
    private consumo: ConsumoProvider,
    private toastCtrl: ToastController,
    private socket: Socket,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {    
    this.arrProdutos = params.get("itens");
    
    this.usuario_id = params.get("usuario");

    this.presentToast(this.usuario_id);

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

    this.loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    });

  }

  finalizar() {
    if (this.ehValido()) {
      this.presentConfirm();
    }
  }

  fazerPedido() {
    //this.loading.present();
    this.consumo.addConsumo({
      usuario_id: this.usuario_id,
      produtosConsumo: this.arrProdutos
    }).subscribe(
      (data) => {
        this.socket.emit("consumo", 'consumo realizado');
        this.presentToast("Pedido incluído com sucesso. :)")
      },
      (error) => {
        //this.loading.dismiss();
        throw new Error(error);
      });
    //this.loading.dismiss();
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

