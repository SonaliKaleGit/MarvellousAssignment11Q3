import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(No:number)
{
   
    if (No <= 1)
        return "Not Prime Number";
   
    if (No == 2 || No == 3)
        return "Prime Number";
   
    if (No % 2 == 0 || No % 3 == 0)
        return "Not Prime Number";
   
    for (var i = 5; i <= Math.sqrt(No); i = i + 6)
        if (No % i == 0 || No % (i + 2) == 0)
            return "Not Prime Number";
 
    return "Prime Number";
}

}
