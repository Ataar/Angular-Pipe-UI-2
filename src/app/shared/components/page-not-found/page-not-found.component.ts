import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

constructor(private titleService: Title) {
    this.titleService.setTitle("Error 404 - We couldn't find what you’re looking for | MyWebsite");
}

  ngOnInit(): void {
  }
   
}
