import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
	private enable:number = 0;
    private disable:number = 0;

   public getEnableCount(){
   	return this.enable;
   }
   public getDisableCount(){
   	return this.disable;
   }
   public enabled(){
   	this.enable++;
   }

   public disabled(){
   	this.disable++;
   }
  public constructor() { }
}
