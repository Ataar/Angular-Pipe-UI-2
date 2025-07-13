import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { Iproduct } from '../../models/products';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit , AfterViewInit {

  proId!:string; // this is used to store id

  isEditMode: boolean = false;  // it is a flag that is by default false and 
  // we want our component in Add product mode by default.

editproduct !:Iproduct; // to get object to edit




   @ViewChild('productForm') productForm !:NgForm;

  constructor(
    private route : ActivatedRoute,
    private productservice : ProductsService,
    private uuidservice : UuidService,
  
  ) { }

 
  
  ngOnInit(): void {
    this.proId = this.route.snapshot.params['pid'];



    
    // 1 - this.isEditMode =  !!this.proId // true if pid exists

    // ----------------------------------------------------------------


//   2 -  if (this.proId) {
//     this.isEditMode = true;
// }   else {
//     this.isEditMode = false;
// }

    // ----------------------------------------------------------------


//  3 - this.isEditMode = this.proId ? true : false;


// ------------------------------------------------------


this.isEditMode = Boolean(this.proId );

this.editproduct  = this.productservice.getProduct(this.proId)
console.log(this.editproduct);


  //  setTimeout(() => {
  //   if(this.productForm)
  //   {
  //     this.productForm.form.patchValue(this.editproduct)  // here form is a propery and patchValue is method to patch value
  //   }
  //  },100);
  

  console.log('Product ID:', this.proId);
  console.log('Edit Mode:', this.isEditMode);
}


ngAfterViewInit(): void {
  console.log(this.productForm);
  
    setTimeout(() => {
      if (this.proId ) {
        this.productForm.form.patchValue(this.editproduct);
      }
    });
  }






  onSubmit(){
     if(this.productForm.valid)
     {
      if(!this.isEditMode) // condition to add new objcet
   {
    let newProduct : Iproduct = {...this.productForm.value , pid :this.uuidservice.uuid()};
    console.log(newProduct);
    newProduct.canReturn = +newProduct.canReturn
    this.productservice.addNewProduct(newProduct)
    this.productForm.reset
    
  }

  

  else
  {
    //  Get Updated object form form
    let Update_Obj = {...this.productForm.value , pid: this.proId}
    Update_Obj.canReturn = + Update_Obj.canReturn
    console.log(Update_Obj);
     // API Call to update objcet >> Service
    this.productservice.updatedObj(Update_Obj)
    this.productForm.reset();
  }
     }  
    
    }
}
