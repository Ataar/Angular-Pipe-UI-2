
import { Component, Inject } from '@angular/core'; // Angular ka Component aur Inject decorator import kiya
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; // Dialog data aur reference ke liye import

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']

})
export class CustomDialogComponent {

 
message!: string;


  constructor(private dialogRef: MatDialogRef<CustomDialogComponent>, // Dialog close karne ke liye dialogRef
    @Inject(MAT_DIALOG_DATA)  data: string  // Parent component se data receive karne ke liye
  ) {this.message = data}
  

   
 


  onYes()
  {
    //  Jab user "Yes" ya confirm karta hai, tab dialog band hota hai aur true value parent component ko bheji jaati hai.
     this.dialogRef.close(true); // Delete confirm karne ka method
  }
  onClose(): void {
    // Jab user "Cancel" karta hai, tab bhi dialog band hota hai lekin false value bheji jaati hai.
    this.dialogRef.close(false); // Dialog close karne ka method
  }

  
}


























// import { Component, Inject } from '@angular/core'; // Angular ka Component aur Inject decorator import kiya
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';  // Dialog data aur reference ke liye import

// @Component({
//   selector: 'app-confirm-dialog',
//   templateUrl: './confirm-dialog.component.html',
//   styleUrls: ['./confirm-dialog.component.scss']
// })
// export class ConfirmDialogComponent {
//   constructor(
//     public dialogRef: MatDialogRef<ConfirmDialogComponent>,  // Dialog close karne ke liye dialogRef
//     @Inject(MAT_DIALOG_DATA) public data: any    // Parent component se data receive karne ke liye
//   ) {}

//   onYesClick(): void {
//     this.dialogRef.close(true); // Dialog close karne ka method
//   }

//   onNoClick(): void {
//     this.dialogRef.close(false); // Dialog close karne ka method
//   }
// }
