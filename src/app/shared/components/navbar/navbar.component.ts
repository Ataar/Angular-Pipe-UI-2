import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
// navbar.component.ts
export class NavbarComponent {

  // Ye ek component ki property hai.
  // Iska initial value false hai, yaani navbar band hai (hidden hai ya collapsed hai).
  navbarOpen = false;



// toggleNavbar() ek method hai jo navbarOpen ka value flip karta hai:

// Agar navbarOpen false hai, to true banata hai.

// Agar true hai, to false banata hai.

// Yaani navbar ko open ya close karta hai jab bhi function call ho.


  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  // closeNavbar() {
  //   this.navbarOpen = false;
  // }
}

