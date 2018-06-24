import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { ProdutosProvider } from '../../../providers/produtos/produtos'
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { EncerrarPedidoPage } from './encerrarpedido/encerrarpedido';

@Component({
  selector: 'page-buscaprodutos',
  templateUrl: 'buscaprodutos.html'
})
export class BuscaProdutosVendaPage {

  data: any;
  arrProdutos: any = [];
  arrItensPedido: any = [];

  constructor(
    //private produtos: ProdutosProvider,
    public navCtrl: NavController,
    public produtos: ProdutosProvider,
    private toastCtrl: ToastController) {

    this.getProdutos();
  }

  getProdutos() {
    this.produtos.getProdutos().subscribe((data) => {
      this.arrProdutos = data;
    });
  }

  addproduto(produto) {

    this.arrItensPedido.push({
      produto: produto
    });

    this.presentToast(produto.descricao);

  }

  presentToast(descricao) {
    let toast = this.toastCtrl.create({
      message: 'Produto adicionado: ' + descricao,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

  proximo() {
    this.navCtrl.push(EncerrarPedidoPage, { itens: this.arrItensPedido });
  }
}
