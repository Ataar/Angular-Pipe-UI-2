import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { ProductComponent } from './shared/components/product/product.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { UserComponent } from './shared/components/user/user.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  
  // { path: '', redirectTo: 'login', pathMatch: 'full' },



  // Dashboard
  { path: 'home', component: DashboardComponent, title: 'Dashboard' },



  // Users
  { path: 'users', component: UsersComponent, title: 'Users List' }, // http://localhost:4200/users
  { path: 'users/addUser', component: UserFormComponent, title: 'Add User' },// http://localhost:4200/users/adduser
  { path: 'users/:userId', component: UserComponent, title: 'View User' }, // http://localhost:4200/users/id
  { path: 'users/:userId/edit', component: UserFormComponent, title: 'Edit User' }, // http://localhost:4200/users/id/edit


  
  // Products
  { path: 'products', component: ProductsComponent, title: 'Products List' },
  { path: 'products/addProduct', component: ProductFormComponent, title: 'Add Product' },
  { path: 'products/:pid', component: ProductComponent, title: 'View Product' },
  { path: 'products/:pid/edit', component: ProductFormComponent, title: 'Edit Product' },



  // 404 Fallback (Optional)
   // app-routing.module.ts
{ path: 'not-found', component: PageNotFoundComponent },
{ path: '**', redirectTo: 'not-found' }

// here ** means any value
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}






// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
// import { UsersComponent } from './shared/components/users/users.component';
// import { ProductsComponent } from './shared/components/products/products.component';
// import { ProductFormComponent } from './shared/components/product-form/product-form.component';
// import { ProductComponent } from './shared/components/product/product.component';
// import { LoginComponent } from './shared/components/login/login.component';
// import { UserFormComponent } from './shared/components/user-form/user-form.component';
// import { UserComponent } from './shared/components/user/user.component';




// const routes: Routes = [
//   {
//     path:'', 
//     redirectTo:'login',   // http://localhost:4200
//     pathMatch:'full'
//   },
//   {
//     path: 'login', // Add the login route
//     component: LoginComponent
//   },
//   {
//     path:'home', 
//     component:DashboardComponent  // http://localhost:4200/home
//   },


//   {
//     path:'users',           // http://localhost:4200/users
//     component:UsersComponent
//   },

//   {
//     path:'users/addUser',
//     component:UserFormComponent
//   },

//   {
//      path:'users/:userId',
//      component:UserComponent

//   },

//   {
//     path:'users/:userId/edit',
//     component:UserFormComponent
//   },

//   {
//     path:'products',          // http://localhost:4200/products
//     component:ProductsComponent
//   },
//   {
//     path:'products/addProduct',  // http://localhost:4200/products/addProduct
//     component:ProductFormComponent
//   },

//   {
//     //:pid is param and angular sees that 123 is the value of the parameter pid.

//     path:'products/:pid',  // http://localhost:4200/products/123
//     component:ProductComponent

//   },
//   {
//     path:'products/:pid/edit' ,  // http://localhost:4200/products/edit
//     component:ProductFormComponent
//   }

 
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)], // we creating this routing for root
//   exports: [RouterModule]
// })
// export class AppRoutingModule { 
  
// }
