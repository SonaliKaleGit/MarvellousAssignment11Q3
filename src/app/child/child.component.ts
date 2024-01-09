import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers:[NumberService,StringService]
})
export class ChildComponent 
{

  public No:number=11;
  public Str:string="Have NICE Day";
  public prime:string;
  public count:number;

  constructor(private num:NumberService,private obj:StringService)
  {
      this.prime=this.num.ChkPrime(this.No);
      this.count=this.obj.CountCapital(this.Str);
  }
 
}
