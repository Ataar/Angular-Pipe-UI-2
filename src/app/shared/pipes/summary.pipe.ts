

// Angular ke core module se Pipe aur PipeTransform ko import karte hain
import { Pipe, PipeTransform } from '@angular/core';

// Pipe decorator batata hai Angular ko ke yeh custom pipe hai
@Pipe({
  name: 'summary'  // Pipe ka naam — use in template: {{ value | summary }}
})
export class SummaryPipe implements PipeTransform {  // PipeTransform interface implement karte hain

  // transform() method — pipe ka core logic hota hai
  transform(
    value: string,                      // Pipe me jo input aayega (string)
    limit: number = 50,                // Default character limit: 50
    mode: 'char' | 'word' = 'char'     // Mode select: 'char' ya 'word'
  ): string {                          // Return type: string

    // Agar value hi nahi mila (null, undefined, empty), to blank return karo
    if (!value) return '';

    // Word-based trimming ka logic
    if (mode === 'word') {
      const words = value.split(' ');        // Space ke basis pe string ko words me convert karo

      if (words.length <= limit) return value;   // Agar words ki total length hi kam hai, to pura string return karo

      return words.slice(0, limit).join(' ') + ' ... ';  // Limit tak words lo, join karo, aur end me '...' lagao
    }

    // Character-based trimming (default case)
    if (value.length <= limit) return value;  // Agar string chhoti hai limit se, to return as is

    return value.substring(0, limit) + ' ... ';  // Limit tak character lo aur '...' jod do
  }
}




































// // Angular ke core module se Pipe aur PipeTransform ko import kar rahe hain
// import { Pipe, PipeTransform } from '@angular/core';

// // @Pipe decorator ka use karke Angular ko bataya ja raha hai ke ye ek custom pipe hai
// @Pipe({
//   name: 'summary'  // Is pipe ka naam 'summary' rakha gaya hai, jo aap template me use karenge: {{ value | summary }}
// })
// export class SummaryPipe implements PipeTransform {  // PipeTransform interface ko implement karte hain

//   // transform method pipe ka main logic hota hai — yahi call hota hai jab aap pipe use karte hain
//  transform(
//   value: string,                      // Pipe me aane wala input text (string)
//   limit: number = 50,                // Kitne characters ya words tak cut karna hai (default: 50)
//   mode: 'char' | 'word' = 'char'     // Mode choose karne ke liye: 'char' (default) ya 'word'
// ): string                            // Function return karega ek string (final summary)

//  {
//     // Agar value empty hai (null, undefined, ya blank), to empty string return karo
//     if (!value) return '';

//     // Agar mode 'word' diya gaya hai, to word-based summary banana hai
//     if (mode === 'word') {
//       const words = value.split(' '); // Poore string ko space ke basis par words me divide karte hain → ek array ban jata hai

//       if (words.length <= limit) return value; // Agar total words already kam hain limit se, to poora value hi return karo

//       // Agar words zyada hain, to limit tak ke words le lo, join karke ek string banao aur uske end me "..." add karo
//       return words.slice(0, limit).join(' ') + '...';
//     }

//     // Agar mode 'char' hai (default), to character-based summary banani hai
//     if (value.length <= limit) return value; // Agar total characters limit se kam hain, to poora value return karo

//     // Agar characters zyada hain, to first `limit` characters lo, aur "..." jod do
//     return value.substring(0, limit) + '...';
//   }  
// }

