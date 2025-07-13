import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Iuser } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Array<Iuser> = [
    {
      id:' 1',
      name: 'Akash Kale',
      email: 'akash.kale@bing.com',
      role: 'Admin',
      avatar: './assets/images/WhatsApp Image 2025-06-28 at 23.16.26_9047ff07.jpg'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@gmail.com',
      role: 'Editor',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: '3',
      name: 'Rohan Kulkarni',
      email: 'rohan.kulkarni@rediff.com',
      role: 'Subscriber',
      avatar: './assets/images/Capture.PNG'
    },
    {
      id: '4',
      name: 'Emily Davis',
      email: 'emily.davis@Yahoo.com',
      role: 'Author',
      avatar: 'https://i.pravatar.cc/150?img=4'
    }
  ];

  constructor(
    private route: Router
  ) {}

  // Api call to get all user data
  fetchAllUserdata(): Observable<Array<Iuser>> {
    return of(this.users);
  }
 
  

  
  // Get single user by ID
  // Api call to get single user data

    getUserData(id: string):Observable <Iuser | undefined> { 
    
      let user = this.users.find(user=>user.id === id);
      return of (user)
    
  }

  // API Call to add new user in DB
  addUser(userObj : Iuser)
  {
     this.users.push(userObj)
     this.route.navigate(['/users'])
  }


  //####################################    Start Update Function    ####################################

  
// API Call to update user object
 
// Function ka naam 'updateUser' hai, ye ek object lega 'updateObj' jo ki Iuser type ka hai
updateUser(updateObj: Iuser)
{
   // 'findIndex' method se array 'this.users' me wo index dhoond rahe hain jiska id, updateObj.id ke barabar ho
   let upadtedIndex = this.users.findIndex(obj => obj.id === updateObj.id);

   // console me index print hoga, jaha pe matching id mila
   console.log(upadtedIndex);

   // Us index par purane object ko naya updateObj se replace kar diya ja raha hai
   this.users[upadtedIndex] = updateObj;

   // 'users' route par redirect kar rahe hain, taki list wapas dikhe
   this.route.navigate(['users']);
}


// ----------------------------------------------------------------------------------


// updateUser(updateObj: Iuser)
// {
//    // users array ke andar har object ki id ka naya array bana rahe hain
//    let idsArray = this.users.map(obj => obj.id);

//    // idsArray me jis index pe updateObj.id match karta hai wo index milta hai
//    let updatedIndex = idsArray.indexOf(updateObj.id);

//    // index ko console me dekhne ke liye print kar rahe hain
//    console.log(updatedIndex);

//    // matching index pe purana object ko naya updateObj se replace kar rahe hain
   
//    this.users[updatedIndex]= updateObj;

//    // users route pe wapas ja rahe hain
//    this.route.navigate(['users']);
// }

  //####################################   End Update Function   ####################################











//####################################  start  onDelete Function       ####################################


// deletUser ek string parameter hai, jisme delete hone wale user ka id aayega
onDelete(deletUser:string)
{
  
  
// findIndex method se users array me se us user ka index dhoondh rahe hain jiska id, deletUser ke barabar hai
// Agar milta hai to index number aayega (0,1,2...), nahi mila to -1 aayega
// removerUser variable me index store ho raha hai
  let removerUser = this.users.findIndex(user=>user.id===deletUser)

  // splice method se uss index wale user ko array se hata rahe hain
// removerUser index se 1 item remove hoga (matlab wo user delete hoga)
  this.users.splice(removerUser , 1)

  // Route service ka use karke 'users' page par navigate kar rahe hain
// Matlab user ko users list wale page par le ja rahe hain
  this.route.navigate(['users'])

}

}


// --------------------------------------------------------------



// onDelete(delUser:string)

// {
//    let del = this.users.map(obj=>obj.id)
//    {
//       let delObj  = del.indexOf(delUser)
//       console.log(delObj);

//       this.users.splice(delObj , 1);
//        this.route.navigate(['users']);  
      
      
//    }
// }
  



// --------------------------------------------------------------------



  //    deletUser ek string parameter hai jisme delete hone wale user ka id aayega
 //    onDelete(deletUser: string) {
  
   // findIndex method se users array me se us user ka index dhoondh rahe hain jiska id, deletUser ke barabar hai
   // Agar milta hai to index me uska position aayega (0,1,2...) nahi mila to -1 aayega
  //   let index = this.users.findIndex(userDel => userDel.id === deletUser);
  
     
  //    Agar index -1 nahi hai matlab user mil gaya array me
  //   if (index !== -1) {
  
  
   //    splice method se uss index wale user ko array se hata rahe hain
 //      1 ka matlab sirf ek hi item delete hoga
//       this.users.splice(index, 1);
     
  
     // Route service ka use karke 'users' path par navigate kar rahe hain
   // Matlab user ko users list wale page par le ja rahe hain
  //   this.route.navigate(['users'])
  // }

// Note: - Ye method kisi user ko uske id ke basis par users array se remove karta hai 
// aur fir 'users' page par le jaata hai.


//####################################  End  onDelete Function   ####################################





