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
  arrProdutos: any = null;  
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
    this.navCtrl.push(EncerrarPedidoPage, { itens: this.arrItensPedido });
  }
}


//{
//  "_id": "5b2eebf5bf8af2428c8c41fd",
//    "valor": 14,
//      "descricao": "Heineken 600",
//        "estabelecimento_id": "5b2ee02de9de172d98baf076",
//          "imagem": "assets/imgs/Heineken.jpg",
//            "__v": 0,
//              "created": "2018-06-24T00:55:17.972Z"
//}


//{
//  "usuario_id": "5b2ddebc2f2a7b271811b206",
//    "usuarioresp_id": "5b2de0f12f2a7b271811b207",
//      "produtosConsumo": [
//        {
//          "quantidade": 2,
//          "produto_id": "5b2eebf5bf8af2428c8c41fd",
//          "produto_descricao": "Heineken 600",
//          "produto_valor": 12
//        },
//        {
//          "quantidade": 2,
//          "produto_id": "5b2eec70bf8af2428c8c41fe",
//          "produto_descricao": "Brahma 600",
//          "produto_valor": 12
//        },
//        {
//          "quantidade": 2,
//          "produto_id": "5b2eecbb7627223b2419c07e",
//          "produto_descricao": "Skol 600",
//          "produto_valor": 12
//        }
//      ]
//}
