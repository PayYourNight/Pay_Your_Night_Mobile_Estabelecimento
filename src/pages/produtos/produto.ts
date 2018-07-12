import { Component } from '@angular/core';
import { ViewController, NavParams  } from 'ionic-angular';
 
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html'
})
export class ProdutoPage {
  produto : any;
  constructor(private navParams: NavParams) {    
    this.produto = this.navParams.get('item');
    
  }  
}
