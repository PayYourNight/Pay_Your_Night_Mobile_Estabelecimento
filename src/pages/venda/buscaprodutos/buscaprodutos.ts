import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ProdutosProvider } from '../../../providers/produtos/produtos'
//import { Produto } from '../../providers/interfaces/produto';
//import { ProdutoPage } from './produto';

@Component({
  selector: 'page-buscaprodutos',
  templateUrl: 'buscaprodutos.html'
})
export class BuscaProdutosVendaPage {

  data: any;
  arrProdutos: any;

  constructor(
    //private produtos: ProdutosProvider,
    public navCtrl: NavController, public produtos: ProdutosProvider) {

    this.produtos.getProdutos().subscribe((data) => {
      this.arrProdutos = data;
    });
    //this.arrProdutos = [
    //  {
    //    "_id": "5b0ef1989f88891df82ce848",
    //    "titulo:": "Produto Teste 1",
    //    "created": "2018-05-24T17:37:24.114Z",
    //    "valor": "10",
    //    "estabelecimento": {
    //      "_id": "5b0ef8439f88891df82ce84a"
    //    },
    //    "imagem": "assets/imgs/Heineken.jpg"
    //  },
    //  {
    //    "_id": "5b0efaf2dbc82e1df810aa9d",
    //    "titulo:": "Produto Teste 2",
    //    "created": "2018-05-24T17:37:24.114Z",
    //    "valor": "10",
    //    "estabelecimento": {
    //      "_id": "5b0ef8439f88891df82ce84a"
    //    }, "imagem": "assets/imgs/Heineken.jpg"
    //  },
    //  {
    //    "_id": "5b0efafadbc82e1df810aa9e",
    //    "titulo:": "Produto Teste 3",
    //    "created": "2018-05-24T17:37:24.114Z",
    //    "valor": "10",
    //    "estabelecimento": {
    //      "_id": "5b0ef8439f88891df82ce84a"
    //    }, "imagem": "assets/imgs/Heineken.jpg"
    //  },
    //  {
    //    "_id": "5b0efafadbc82e1df810aa10",
    //    "titulo:": "Produto Teste 3",
    //    "created": "2018-05-24T17:37:24.114Z",
    //    "valor": "10",
    //    "estabelecimento": {
    //      "_id": "5b0ef8439f88891df82ce84a"
    //    }, "imagem": "assets/imgs/Heineken.jpg"
    //  },
    //  {
    //    "_id": "5b0efafadbc82e1df810aa11",
    //    "titulo:": "Produto Teste 3",
    //    "created": "2018-05-24T17:37:24.114Z",
    //    "valor": "10",
    //    "estabelecimento": {
    //      "_id": "5b0ef8439f88891df82ce84a"
    //    }, "imagem": "assets/imgs/Heineken.jpg"
    //  },
    //  {
    //    "_id": "5b0efafadbc82e1df810aa12",
    //    "titulo:": "Produto Teste 3",
    //    "created": "2018-05-24T17:37:24.114Z",
    //    "valor": "10",
    //    "estabelecimento": {
    //      "_id": "5b0ef8439f88891df82ce84a"
    //    }, "imagem": "assets/imgs/Heineken.jpg"
    //  },
    //  {
    //    "_id": "5b0efafadbc82e1df810aa13",
    //    "titulo:": "Produto Teste 3",
    //    "created": "2018-05-24T17:37:24.114Z",
    //    "valor": "10",
    //    "estabelecimento": {
    //      "_id": "5b0ef8439f88891df82ce84a"
    //    }, "imagem": "assets/imgs/Heineken.jpg"
    //  },
    //  {
    //    "_id": "5b0efafadbc82e1df810aa14",
    //    "titulo:": "Produto Teste 3",
    //    "created": "2018-05-24T17:37:24.114Z",
    //    "valor": "10",
    //    "estabelecimento": {
    //      "_id": "5b0ef8439f88891df82ce84a"
    //    }, "imagem": "assets/imgs/Heineken.jpg"
    //  },
    //  {
    //    "_id": "5b0efafadbc82e1df810aa15",
    //    "titulo:": "Produto Teste 3",
    //    "created": "2018-05-24T17:37:24.114Z",
    //    "valor": "10",
    //    "estabelecimento": {
    //      "_id": "5b0ef8439f88891df82ce84a"
    //    }, "imagem": "assets/imgs/Heineken.jpg"
    //  }
    ];

    this.getProdutos();
  }

  getProdutos() {

  }
}
