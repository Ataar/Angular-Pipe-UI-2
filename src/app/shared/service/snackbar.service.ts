import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  open(arg0: string, arg1: string, arg2: { duration: number; horizontalPosition: string; verticalPosition: string; panelClass: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private snackbar:MatSnackBar
  ) {}

  openSnackBar(msg :string)   // openSnackBar is our self function
  {
    let configObj:MatSnackBarConfig = {
     verticalPosition:'top',
     horizontalPosition:'center',
     duration:3000
    }
    this.snackbar.open(msg,"Close",configObj)
  }
}
