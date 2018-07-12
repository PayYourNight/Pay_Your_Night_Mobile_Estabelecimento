import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { ProdutoPage } from './produto';

@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html'
})
export class ProdutosPage {

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

  productDetail(item) {
    this.navCtrl.push(ProdutoPage, { item: item });
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
