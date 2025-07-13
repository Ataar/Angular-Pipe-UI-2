import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from '../../models/users';
import { UuidService } from '../../service/uuid.service';
import { UsersService } from '../../service/users.service';
import { MatSnackBar, } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  isEditMode: boolean = false; // By default, we are in Add Mode (isEditMode = false). If userId exists, we switch to Edit Mode (isEditMode = true).

  userId!: string;

  userForm!:FormGroup;

 

  constructor(
    private route: ActivatedRoute,
    private uidService : UuidService,
    private userService : UsersService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

     this.userForm  = new FormGroup({
      avatar:new FormControl(null ,[Validators.required] ),
       name : new FormControl(null , [Validators.required]),
       email:new FormControl(null , [Validators.required]),
       role:new FormControl(null , [Validators.required]),

      })
      // console.log(this.userForm);
     
    // Checking route params to see if userId exists
    this.userId = this.route.snapshot.params['userId'];
    if (this.userId) {
      this.isEditMode = true; // If userId is present, switch to Edit Mode
      

      // API CALL to get userObjcet for pathcing the values into form using above userId

  this.userService.getUserData(this.userId)
  .subscribe(res => {
  console.log(res);
  if(res) {
    this.userForm.patchValue(res);
  }
})
      
  }
  }

  onUserSubmit(){
    if(this.userForm.valid){
      if(!this.isEditMode){ // if there is no edit mode so add new user.
        let newUser :Iuser =   this.userForm.value // here we are getting values of an Object from a Form
      newUser.id = this.uidService.uuid() // "An ID is being assigned to the object"
      console.log(newUser);
      this.userForm.reset()
      this.userService.addUser(newUser)
      this._snackBar.open('User Added!', '', { duration: 1000, horizontalPosition: 'center', verticalPosition: 'top',panelClass: 'user-form-snackbar' });

      }
       
      else
      {
        let updateUser :Iuser = {...this.userForm.value , id : this.userId}; // here we are updating exisiting user by id after
        // that updated object will be recived through a Form
        
        this.userService.updateUser(updateUser)
        console.log(updateUser);
        this._snackBar.open('Changes saved successfully', '', { duration: 1000, horizontalPosition: 'center', verticalPosition: 'top', panelClass: 'user-form-snackbar' });

}

    }
  }

  
}




//  openSnackBar() {
//   this._snackBar.open('User Added!', 'Close', {
//     horizontalPosition: 'center',
//     verticalPosition: 'top',
//     duration: 1000, // 1 second
//   });
// }


// openSnackBar(){
// this._snackBar.open('User Added!', '', { duration: 1000, horizontalPosition: 'center', verticalPosition: 'top' });

// }



        
  
        

