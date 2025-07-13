import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(    
    private router :Router  // here we have to inject the instance of router

  ) { }

  ngOnInit(): void {
  }

   onClick()
     {
        // this  instance of router class will help us to navigate form one compo to another compo
        // and /users is a absolute routing
         this.router.navigate(["/users"]) 
     }
  }
