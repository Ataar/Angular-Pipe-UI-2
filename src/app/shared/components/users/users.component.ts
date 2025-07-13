import { Component, OnDestroy, OnInit } from '@angular/core';
import { Iuser } from '../../models/users';
import { UsersService } from '../../service/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit  , OnDestroy{
 
  // usersArr: Array<Iuser> = [];  
  usersArr: Iuser [] = [];  
  unsubscribe !: Subscription
  constructor(
    // here UsersService will give the data that's why we injected it.
    private userService: UsersService,
    
  ) {}

  ngOnInit(): void {
  // The method we will use will return an observer and the data will be received only after subscribing.
  // so fetchAllUserdata method will return observable and to get data we have to subscribe
    this.unsubscribe = this.userService.fetchAllUserdata().subscribe(res => {
      this.usersArr = res;
      // console.log(this.usersArr);
      
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe()
  }

//  goToUserDetails(userId: number) {
//   this.router.navigate(['/users', userId]);
// }



// ---------------------- Start:-  To remove the image which has wrong path-------------------------


// isValidImage(url: string): boolean {
  
//   // Step 1: Agar URL empty ya undefined hai to false return karo, image nahi dikhegi
//   if (!url) return false;

//   // Step 2:
//   // Check karo:
//   //  -> Agar URL ka end '.png' ya '.jpg' extension se ho to true return karo (image valid mani jayegi)
//   //  -> Ya agar URL me 'pravatar.cc' likha ho to bhi true return karo (kyunki ye dynamic image API hai)
//   // Agar dono me se koi bhi condition match nahi hoti to false return hoga

//   return /\.(png|jpg)$/i.test(url) || url.includes('pravatar.cc');
  
// }

// ----------------------End:-   To remove the image which has wrong path-------------------------





isValidImage(url: string): boolean {
  if (!url) return false;

  // Extension check: png, jpg, jpeg, gif, webp, bmp, svg
  const hasImageExtension = /\.(png|jpe?g|gif|webp|bmp|svg)$/i.test(url);

  // Online image check: agar 'http' ya 'https' se start ho aur 'images', 'img', 'photo', etc. ho URL me
  const isOnlineImage = /^https?:\/\/.+\.(png|jpe?g|gif|webp|bmp|svg)?/i.test(url);

  return hasImageExtension || isOnlineImage;
}


}

