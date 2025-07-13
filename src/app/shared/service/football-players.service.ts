import { Injectable } from '@angular/core';
import { IfootPlayers } from '../models/footballPlayers ';

@Injectable({
  providedIn: 'root'
})
export class FootballPlayersService{

  footPlayerArr: IfootPlayers[] = [
  { playerName: "Lionel Messi", country: "Argentina", goals: 819, assists: 361, debutYear: 2004 },
  { playerName: "Cristiano Ronaldo", country: "Portugal", goals: 873, assists: 268, debutYear: 2002 },
  { playerName: "Neymar Jr.", country: "Brazil", goals: 450, assists: 253, debutYear: 2009 },
  { playerName: "Kylian Mbappé", country: "France", goals: 300, assists: 140, debutYear: 2015 },
  { playerName: "Luka Modrić", country: "Croatia", goals: 80, assists: 122, debutYear: 2003 },
  { playerName: "Robert Lewandowski", country: "Poland", goals: 650, assists: 140, debutYear: 2006 },
  { playerName: "Mohamed Salah", country: "Egypt", goals: 300, assists: 150, debutYear: 2010 },
  { playerName: "Kevin De Bruyne", country: "Belgium", goals: 160, assists: 280, debutYear: 2008 },
  { playerName: "Karim Benzema", country: "France", goals: 450, assists: 130, debutYear: 2005 },
  { playerName: "Erling Haaland", country: "Norway", goals: 200, assists: 60, debutYear: 2019 },
  { playerName: "Vinícius Júnior", country: "Brazil", goals: 110, assists: 85, debutYear: 2018 },
  { playerName: "Antoine Griezmann", country: "France", goals: 280, assists: 120, debutYear: 2009 },
  { playerName: "Sadio Mané", country: "Senegal", goals: 190, assists: 90, debutYear: 2012 },
  { playerName: "Harry Kane", country: "England", goals: 310, assists: 100, debutYear: 2011 },
  { playerName: "Lautaro Martínez", country: "Argentina", goals: 120, assists: 65, debutYear: 2015 },
  { playerName: "Jadon Sancho", country: "England", goals: 75, assists: 80, debutYear: 2017 },
  { playerName: "Heung-min Son", country: "South Korea", goals: 210, assists: 95, debutYear: 2010 },
  { playerName: "Bruno Fernandes", country: "Portugal", goals: 130, assists: 110, debutYear: 2013 },
  { playerName: "Joshua Kimmich", country: "Germany", goals: 45, assists: 130, debutYear: 2015 },
  { playerName: "João Félix", country: "Portugal", goals: 85, assists: 55, debutYear: 2018 },
  { playerName: "Phil Foden", country: "England", goals: 70, assists: 60, debutYear: 2017 },
  { playerName: "Declan Rice", country: "England", goals: 20, assists: 35, debutYear: 2017 },
  { playerName: "Pedri", country: "Spain", goals: 25, assists: 40, debutYear: 2020 },
  { playerName: "Gavi", country: "Spain", goals: 18, assists: 22, debutYear: 2021 },
  { playerName: "Frenkie de Jong", country: "Netherlands", goals: 35, assists: 75, debutYear: 2016 },
  { playerName: "Raheem Sterling", country: "England", goals: 150, assists: 90, debutYear: 2012 },
  { playerName: "Ousmane Dembélé", country: "France", goals: 95, assists: 85, debutYear: 2015 },
  { playerName: "Marcus Rashford", country: "England", goals: 145, assists: 70, debutYear: 2016 },
  { playerName: "Jack Grealish", country: "England", goals: 65, assists: 72, debutYear: 2014 },
  { playerName: "Jude Bellingham", country: "England", goals: 45, assists: 40, debutYear: 2020 }
];


   constructor(){}

   fetchAllData(): IfootPlayers[] {
  return this.footPlayerArr;
}

}

 

 




