import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// ✅ Centralized Angular Material imports
import { MaterialModule } from './material/material.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';

// ✅ Shared Components
import { NavbarComponent } from './components/navbar/navbar.component';

// import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

 import { CustomDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

const matModArr = [
  MatSnackBarModule
]

@NgModule({
  declarations: [
    NavbarComponent,
    CustomDialogComponent
    // ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule , // ✅ IMPORTED HERE
    MatSnackBarModule,
    ...matModArr ,
  ],
  exports: [
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ...matModArr
  ]
})
export class SharedModule {}
