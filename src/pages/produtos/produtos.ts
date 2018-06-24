import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ProdutosProvider } from '../../providers/produtos/produtos'
import { Produto } from '../../providers/interfaces/produto';
import { ProdutoPage } from './produto';
 
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html'
})
export class ProdutosPage {

  data: any;
  arrProdutos:any;
  errorMessage: string;
  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0;
 
  constructor(
    private produtos: ProdutosProvider, 
    public navCtrl: NavController) {
    this.arrProdutos = [
      {
        "_id":"5b0ef1989f88891df82ce848",
        "titulo:":"Produto Teste 1",
        "created":"2018-05-24T17:37:24.114Z",
        "valor":"10",
        "estabelecimento": {
           "_id":"5b0ef8439f88891df82ce84a"
        },
        "imagem":"assets/imgs/Heineken.jpg"
      },
      {
        "_id":"5b0efaf2dbc82e1df810aa9d",
        "titulo:":"Produto Teste 2",
        "created":"2018-05-24T17:37:24.114Z",
        "valor":"10",
        "estabelecimento":{
          "_id":"5b0ef8439f88891df82ce84a"
        },"imagem":"assets/imgs/Heineken.jpg"
      },
      {
        "_id":"5b0efafadbc82e1df810aa9e",
        "titulo:":"Produto Teste 3",
        "created":"2018-05-24T17:37:24.114Z",
        "valor":"10",
        "estabelecimento":{
          "_id":"5b0ef8439f88891df82ce84a"
        },"imagem":"assets/imgs/Heineken.jpg"
      },
      {
        "_id":"5b0efafadbc82e1df810aa10",
        "titulo:":"Produto Teste 3",
        "created":"2018-05-24T17:37:24.114Z",
        "valor":"10",
        "estabelecimento":{
          "_id":"5b0ef8439f88891df82ce84a"
        },"imagem":"assets/imgs/Heineken.jpg"
      },
      {
        "_id":"5b0efafadbc82e1df810aa11",
        "titulo:":"Produto Teste 3",
        "created":"2018-05-24T17:37:24.114Z",
        "valor":"10",
        "estabelecimento":{
          "_id":"5b0ef8439f88891df82ce84a"
        },"imagem":"assets/imgs/Heineken.jpg"
      },
      {
        "_id":"5b0efafadbc82e1df810aa12",
        "titulo:":"Produto Teste 3",
        "created":"2018-05-24T17:37:24.114Z",
        "valor":"10",
        "estabelecimento":{
          "_id":"5b0ef8439f88891df82ce84a"
        },"imagem":"assets/imgs/Heineken.jpg"
      },
      {
        "_id":"5b0efafadbc82e1df810aa13",
        "titulo:":"Produto Teste 3",
        "created":"2018-05-24T17:37:24.114Z",
        "valor":"10",
        "estabelecimento":{
          "_id":"5b0ef8439f88891df82ce84a"
        },"imagem":"assets/imgs/Heineken.jpg"
      },
      {
        "_id":"5b0efafadbc82e1df810aa14",
        "titulo:":"Produto Teste 3",
        "created":"2018-05-24T17:37:24.114Z",
        "valor":"10",
        "estabelecimento":{
          "_id":"5b0ef8439f88891df82ce84a"
        },"imagem":"assets/imgs/Heineken.jpg"
      },
      {
        "_id":"5b0efafadbc82e1df810aa15",
        "titulo:":"Produto Teste 3",
        "created":"2018-05-24T17:37:24.114Z",
        "valor":"10",
        "estabelecimento":{
          "_id":"5b0ef8439f88891df82ce84a"
        },"imagem":"assets/imgs/Heineken.jpg"
      }
    ];

    this.getProdutos();
  }

  getProdutos(){       
    this.perPage = 10;
    this.totalData = 3;
    this.totalPage = 1;
 
    // this.produtos.getProdutos(this.page)
    //  .subscribe(
    //    res => {
    //      console.log(res);
    //      this.data = res;
    //      this.arrProdutos = this.data.data;
    //      this.perPage = this.data.per_page;
    //      this.totalData = this.data.total;
    //      this.totalPage = this.data.total_pages;
    //    },
    //    error =>  this.errorMessage = <any>error);
  }

  doInfinite(infiniteScroll) {
    this.page = this.page+1;
    setTimeout(() => {
      // this.produtos.getProdutos(this.page)
      //    .subscribe(
      //      res => {
      //        this.data = res;
      //        this.arrProdutos = this.data.data;
      //        this.perPage = this.data.per_page;
      //        this.totalData = this.data.total;
      //        this.totalPage = this.data.total_pages;
      //        for(let i=0; i<this.data.data.length; i++) {
      //          this.arrProdutos.push(this.data.data[i]);
      //        }
      //      },
      //      error =>  this.errorMessage = <any>error);

      for(let i=0; i<this.arrProdutos.length; i++) {
                  this.arrProdutos.push(this.arrProdutos[i]);
          }
  
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    // let val = ev.target.value;

    // if the value is an empty string don't filter the items
    // if (val && val.trim() != '') {
    //  this.arrProdutos = this.arrProdutos.filter((item) => {
    //    return (item.descricao.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //  })
    // }
  }

  productDetail(_id:string){
    this.navCtrl.push(ProdutoPage, {id:_id});
  }
}
