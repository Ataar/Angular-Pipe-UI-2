import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { Subscription } from 'rxjs';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit , OnDestroy {

  id!: string;
  avatar!: string;
  name!: string;
  role!:string;
  email!:string;

  userSubscription !:Subscription

  userDelSubscribe !: Subscription

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router,
    private dialog: MatDialog,
    private _snackBar:MatSnackBar
  
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];

    // Search user by ID from array
    if(this.id)
    {
      this.userService.getUserData(this.id).subscribe(res=>{
        if (res) {
          this.avatar = res.avatar;
          this.name = res.name;
          this.role = res.role;
          this.email = res.email;
        }

      });

      
    }

    // note : - hum same component me hain aur url me param change ho rah hai to us time hum param
    // observable use karte hain aur agar pram change na ho to snapshot.params object use karenge.

        
      // this.route.params
      // .subscribe((params:Params)=>{
      //   console.log(params);
      //  this.userId = params['userId']
      //  this.userService.getUserData(this.userId).subscribe(res=>{
      //    if (res) {
      //    this.avatar = res.avatar;
      //    this.userName = res.name;
      //    }
      //   })
        
      // });
      
  }




goBack() {
 this.router.navigate(['users']);
}



onDelete() {
  const dialogConfig = new MatDialogConfig();  // jab dialogBox ke bahar click karenge to wo hide nahi hoga
  dialogConfig.disableClose = true;
  // title: 'Confirm Delete',
  dialogConfig.data = ` Are you sure you want to delete this User?`
    


  const dialogRef = this.dialog.open(CustomDialogComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.userService.onDelete(this.id);
      this._snackBar.open('Deleted Successfully!', '', {
        duration: 1000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: 'user-delete-snackbar'
      });
    }
  });

  

  
}


// onDelete() {
//   const dialogRef = this.dialog.open(CustomDialogComponent, {
//     data: {
//       title: 'Confirm Delete',
//       message: 'Are you sure you want to delete this User?',
//       }
//   });
//   console.log('Deleted:', this.id);
//    dialogRef.afterClosed().subscribe(result => {
//     // console.log(result);
//   if(result)
//   {
//     this.userService.onDelete(this.id);
//     this._snackBar.open('Deleted Successfully!', '', { duration: 1000, horizontalPosition: 'center', verticalPosition: 'top',panelClass: 'user-delete-snackbar' });

//   }
// })
// }



// isImage(): boolean {

//   // Agar avatar empty, undefined ya null hai to false return karo
//   // Matlab koi valid image path nahi mila to image nahi dikhegi
//   if (!this.avatar) return false;

//   // Agar avatar me koi valid image extension ho (sirf .png ya .jpg) 
//   // ya phir avatar URL me 'pravatar.cc' likha ho to true return karo
//   // true ka matlab image valid hai, DOM me dikhayi jayegi

//   return /\.(png|jpg|jpeg)$/i.test(this.avatar) || this.avatar.includes('pravatar.cc');

// }



isImage(url: string): boolean {
  if (!url) return false;

  // Extension check: png, jpg, jpeg, gif, webp, bmp, svg
  const hasImageExtension = /\.(png|jpe?g|gif|webp|bmp|svg)$/i.test(url);

  // Online image check: agar 'http' ya 'https' se start ho aur 'images', 'img', 'photo', etc. ho URL me
  const isOnlineImage = /^https?:\/\/.+\.(png|jpe?g|gif|webp|bmp|svg)?/i.test(url);

  return hasImageExtension || isOnlineImage;
}
  ngOnDestroy(): void {
    
    // if (this.userSubscription) check karega ki:
    // Kya isme koi subscription object hai?
   // Agar hai to safely unsubscribe karo.
   // Agar nahi hai to kuch mat karo — program continue rahega, koi error nahi.

   if (this.userSubscription) {
      this.userSubscription.unsubscribe();
   }

     if (this.userDelSubscribe) {
      this.userDelSubscribe.unsubscribe();
   }
}


}












































































// -----------------------------------------------------------------------------------------






// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Iuser } from '../../models/users';
// import { UsersService } from '../../service/users.service';

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.scss']
// })
// export class UserComponent implements OnInit {

//   userInfo!: Iuser;

//   constructor(private route: ActivatedRoute, private userService: UsersService) {}

//   ngOnInit(): void {
//     const id = this.route.snapshot.params['userId'];
//     this.userInfo = this.userService.getUserData(id);
//   }
// }

