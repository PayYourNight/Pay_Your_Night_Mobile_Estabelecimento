import { Component } from '@angular/core';
import { ViewController, NavParams  } from 'ionic-angular';
 
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html'
})
export class ProdutoPage {
  item : any;
  constructor(private navParams: NavParams) {    
      this.item = this.navParams.get('item');
  }  
}
