import { Component, OnInit } from '@angular/core';
import { IfootPlayers } from './shared/models/footballPlayers ';
import { FootballPlayersService } from './shared/service/football-players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
footPlayerArr : IfootPlayers[] = []
searchText !:string
searchField: keyof IfootPlayers|undefined;

   constructor(
    private footPlyerService : FootballPlayersService
   ){}
  ngOnInit(): void {
    this.footPlayerArr =  this.footPlyerService.fetchAllData()
  }
  
  
  title ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iusto nisi repudiandae rerum quam voluptate doloribus! Ut corporis officia iusto debitis? Adipisci assumenda nobis, voluptates earum eum nemo iure maxime officia blanditiis magnam, dolorum ipsam dignissimos architecto temporibus nihil voluptate?';
  
  course = {
    title: 'React & TypeScript Mastery',
    students: 98345,
    rating: 4.921067958,
    price: 149.49,
    releaseDate: new Date(),
  };
}

   

























  

