import { Component } from '@angular/core';
import { ViewController, NavParams  } from 'ionic-angular';
 
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html'
})
export class ProdutoPage {
  id : any;
  constructor(private navParams: NavParams) {    
      this.id = this.navParams.get('id');
  }  
}