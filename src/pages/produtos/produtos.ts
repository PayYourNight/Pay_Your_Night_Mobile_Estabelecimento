import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ProdutosProvider } from '../../providers/produtos/produtos'
import { Produto } from '../../providers/interfaces/produto';
 
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html'
})
export class ProdutosPage {

  data: any;
  arrProdutos: string[];
  errorMessage: string;
  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0;
 
  constructor(private produtos: ProdutosProvider) {
    this.getProdutos();
  }

  getProdutos(){
    this.produtos.getProdutos(this.page)
     .subscribe(
       res => {
         this.data = res;
         this.arrProdutos = this.data.data;
         this.perPage = this.data.per_page;
         this.totalData = this.data.total;
         this.totalPage = this.data.total_pages;
       },
       error =>  this.errorMessage = <any>error);
  }

  doInfinite(infiniteScroll) {
    this.page = this.page+1;
    setTimeout(() => {
      this.produtos.getProdutos(this.page)
         .subscribe(
           res => {
             this.data = res;
             this.perPage = this.data.per_page;
             this.totalData = this.data.total;
             this.totalPage = this.data.total_pages;
             for(let i=0; i<this.data.data.length; i++) {
               this.arrProdutos.push(this.data.data[i]);
             }
           },
           error =>  this.errorMessage = <any>error);
  
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }

}