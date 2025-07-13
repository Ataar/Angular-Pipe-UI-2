import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ✅ App-level or feature-level components (not part of SharedModule)
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { UserComponent } from './shared/components/user/user.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

// ✅ Import the shared module that contains navbar, dialog, material modules etc.
import { SharedModule } from './shared/shared.module';

// ✅ Emoji picker polyfill
import 'emoji-picker-element';
import { SummaryPipe } from './shared/pipes/summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    ProductsComponent,
    ProductComponent,
    ProductFormComponent,
    UserComponent,
    UserFormComponent,
    PageNotFoundComponent,
    SummaryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule  // ✅ All shared components, directives, material, forms, etc.
    
     
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // ✅ Required for emoji-picker-element
})
export class AppModule {}


// -----------------------------------------------------------------------------------------


// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { NavbarComponent } from './shared/components/navbar/navbar.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule } from '@angular/material/button';
// import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
// import { UsersComponent } from './shared/components/users/users.component';
// import { ProductsComponent } from './shared/components/products/products.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ProductComponent } from './shared/components/product/product.component';
// import { ProductFormComponent } from './shared/components/product-form/product-form.component';
// import { MatIconModule } from '@angular/material/icon';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatDialogModule } from '@angular/material/dialog';
// import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
// import { HttpClientModule } from '@angular/common/http';
// import { UserComponent } from './shared/components/user/user.component';
// import { UserFormComponent } from './shared/components/user-form/user-form.component';
// import { MatChipsModule } from '@angular/material/chips';

// // ✅ Import the emoji-picker-element polyfill (add this in polyfills.ts instead if preferred)
// import 'emoji-picker-element';
// import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
// import { MaterialModule } from './material/material.module';

// @NgModule({
//   declarations: [
//     AppComponent,
//     NavbarComponent,
//     DashboardComponent,
//     UsersComponent,
//     ProductsComponent,
//     ProductComponent,
//     ProductFormComponent,
//     ConfirmDialogComponent,
//     UserComponent,
//     UserFormComponent,
//     PageNotFoundComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     MatButtonModule,
//     FormsModule,
//     MatIconModule,
//     MatTooltipModule,
//     ReactiveFormsModule,
//     MatDialogModule,
//     HttpClientModule,
//     MatChipsModule,
//     MatSnackBarModule,
//     MaterialModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent],

//   // ✅ Required for emoji-picker-element
//   schemas: [CUSTOM_ELEMENTS_SCHEMA]
// })
// export class AppModule {}