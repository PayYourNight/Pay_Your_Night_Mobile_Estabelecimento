import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { ProdutosProvider } from '../../../providers/produtos/produtos'
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { EncerrarPedidoPage } from './encerrarpedido/encerrarpedido';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-buscaprodutos',
  templateUrl: 'buscaprodutos.html'
})
export class BuscaProdutosVendaPage {

  data: any;
  arrProdutos: any = null;  
  arrItensPedido: any = [];
  items: any = [];
  usuario: string;

  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    public produtos: ProdutosProvider,
    private toastCtrl: ToastController) {

    this.usuario = navParam.get("usuario");

    this.getProdutos();
  }

  getProdutos() {
    this.produtos.getProdutos().subscribe((data) => {
      this.arrProdutos = data;
      this.initializeItems();
    });
  }

  addproduto(produto) {

    produto.isChecked = !produto.isChecked;
    this.arrItensPedido.push(produto);
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
    this.navCtrl.push(EncerrarPedidoPage, { itens: this.arrItensPedido, usuario: this.usuario });
  }

  initializeItems() {
    this.items = this.arrProdutos;
  }

  getItems(ev: any) {
    this.initializeItems();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.descricao.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
