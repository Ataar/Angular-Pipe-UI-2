import { Injectable } from '@angular/core';
import { Iproduct } from '../models/products';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsArr: Array<Iproduct> = [
    {
      pname: 'Google Pixel 7a',
      image:
        'data:image/jpeg;base64,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',
      pid: 'GGL-PXL-7A-001',
      pstatus: 'Processing',
      canReturn: 1,
      productUrl:'https://store.google.com/in/category/phones?hl=en-IN'
    },
    {
      pname: 'Sony WH-1000XM5 Headphones',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl51aYvvARpH5NnjgzwLQcljytixxHHiIJgw&s',
      pid: 'SNY-HDPH-XM5-BLK',
      pstatus: 'Awaiting Shipment',
      canReturn: 1,
      productUrl:''
    },
    {
      pname: 'Dell XPS 13 Laptop',
      image: 'https://www.notebookcheck.net/fileadmin/_processed_/f/c/csm_Dell-XPS-13-9345-laptop-Snapdragon-X-Elite_00d6aaa789.jpg',
      pid: 'DLL-XPS13-9310-SLV',
      pstatus: 'Delivered',
      canReturn: 0,
      productUrl:''
    },
    {
      pname: 'Apple iPad Air 5th Gen',
      image: 'https://s.yimg.com/uu/api/res/1.2/R2YmxoIogBQNQSZgTse0cQ--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-03/de844380-a47d-11ec-b6be-9dd2ff775c4e.cf.jpg',
      pid: 'APL-IPADAIR5-BLU-64',
      pstatus: 'Shipped',
      canReturn: 1,
      productUrl:''
    },
    {
      pname: 'Samsung Odyssey G7 Monitor',
      image: 'https://m.media-amazon.com/images/I/81ml4eymFjL.jpg',
      pid: 'SAM-MON-G7-27',
      pstatus: 'Out for Delivery',
      canReturn: 1,
      productUrl:''
    },
    {
      pname: 'Logitech MX Master 3S Mouse',
      image: 'https://images.squarespace-cdn.com/content/v1/601885b70b67366533247ba3/508fa2c2-cba5-4c14-b0e6-e66749617c93/logitech-options-mxmaster-setup.png',
      pid: 'LOG-MXM3S-GRY',
      pstatus: 'Order Confirmed',
      canReturn: 1,
      productUrl:''
    },
    {
      pname: 'Kindle Paperwhite Signature Edition',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/DS/XX/GG/3567421/introducing-kindle-paperwhite-signature-edition-32-gb-.jpg',
      pid: 'AMZ-KPWSE-32GB',
      pstatus: 'Delivered',
      canReturn: 0,
      productUrl:''  
    },
    {
      pname: 'GoPro HERO11 Black',
      image: 'https://i.ytimg.com/vi/RzZ_BTd9siQ/maxresdefault.jpg',
      pid: 'GPR-HRO11-BLK',
      pstatus: 'Pending Payment',
      canReturn: 1,
       productUrl:'https://gopro.com/en/bs/shop/cameras/hero11-black/CHDHX-111-master.html'
    },
    {
      pname: 'Bose QuietComfort Earbuds II',
      image: 'https://i.rtings.com/assets/products/AQze2J9H/bose-quietcomfort-earbuds-ii-truly-wireless/design-medium.jpg?format=auto',
      pid: 'BSE-QCEB2-SOAP',
      pstatus: 'Shipped',
      canReturn: 1,
      productUrl:''
    },
    {
      pname: 'Nintendo Switch OLED Model',
      image: 'https://i0.wp.com/www.vooks.net/img/2021/10/oled-hero.jpg?fit=1000%2C562&ssl=1',
      pid: 'NIN-SWOLED-WHT',
      pstatus: 'In Transit',
      canReturn: 1,
      productUrl:''
    }

   
  ];
 

  constructor(
    private router : Router, // router instance is injected
    private snackbar : SnackbarService
    ) {}   

  // API call to fetch all products data
  fetchAllproducts(): Array<Iproduct> {
    return this.productsArr;
  }

  getProduct(id: string): Iproduct {
    // API call to get a product using pid = id(parameter)
    return this.productsArr.find((prod) => prod.pid === id)!;
  }

   addNewProduct(prod : Iproduct)
   {
      // API call to POST new Product in DB
     this.productsArr.push(prod);
    this.router.navigate(['/products']);
    this.snackbar.openSnackBar('✅ Success! A new user has been added.')
     
   }

   updatedObj(updatePro:Iproduct)
   {
      // API to Patch
     let getIndex = this.productsArr.findIndex(prod=>prod.pid===updatePro.pid)

      this.productsArr[getIndex] = updatePro;
      this.router.navigate(['/products',updatePro.pid]);
      this.snackbar.openSnackBar('✅ All set! The user has been updated.')
      // this.snackbar.openSnackBar('✅ Changes saved! Everything’s up to date.')

   }


   onDelPro(product:Iproduct)
   {
       // API Call to delete single product
      let getIndex = this.productsArr.findIndex(pro=>pro.pid===product.pid)
       console.log(getIndex);
       this.productsArr.splice(getIndex , 1)
        // if we want to navigate form ts so RouterService will help to navigate 
        this.router.navigate(['products'])
        this.snackbar.openSnackBar('✅ Product removed from the list.')
   
   }

   
}

