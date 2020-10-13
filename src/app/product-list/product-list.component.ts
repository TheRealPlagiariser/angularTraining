import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('This product has been shared');
  }

  productInfo(product){
    if(product.name == "Pixel 5")
    {
      window.alert("This is the best phone");
    }
    else{
      window.alert("Not recommended");
      
    }
    
  }

  onNotify(event){
    window.alert("Phone is " + event.name);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/