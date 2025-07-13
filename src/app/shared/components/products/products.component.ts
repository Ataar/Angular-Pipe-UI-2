import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Iproduct } from '../../models/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  productsArr !: Array<Iproduct>  // this property is taken to hold your data

  constructor(
    // we have to make API Call through service and also get the data from there
    // so for that we inject the instance of service
    private productService : ProductsService,
    private route : Router 
  ) { }

  ngOnInit(): void {
      // fetchAllproducts returns data means whatever the method returns data store into productsArr property 
    this.productsArr = this.productService.fetchAllproducts();
    
    // console.log(this.productsArr);
    
  }

//   navigateToAddProduct() {
//   this.route.navigate(['/products/addProduct']);
// }
}





