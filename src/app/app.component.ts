// Component decorator ko Angular core module se import kar rahe hain
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',                      // Is component ka selector — use in HTML as <app-root>
  templateUrl: './app.component.html',       // Is component ka HTML template
  styleUrls: ['./app.component.scss'],       // CSS file(s) for styling
})
export class AppComponent {                  // Component class

  // Ek string variable `title` define kiya gaya hai
  title = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iusto nisi repudiandae rerum quam voluptate doloribus! Ut corporis officia iusto debitis? Adipisci assumenda nobis, voluptates earum eum nemo iure maxime officia blanditiis magnam, dolorum ipsam dignissimos architecto temporibus nihil voluptate?';

  
  // Constructor method — yaha kuch nahi likha gaya
  constructor() {}

  // Angular lifecycle method — jab component initialize hota hai
  ngOnInit(): void {}
}




    // // Ek object `course` jisme course ke details hain
  // course = {
  //   title: 'React & TypeScript Mastery',     // Course ka naam
  //   students: 98345,                          // Students enrolled
  //   rating: 4.921067958,                      // Course rating
  //   price: 149.49,                            // Price of course
  //   releaseDate: new Date(),                 // Current date (release date)
  // };

   

























  

