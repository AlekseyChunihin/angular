import { Injectable } from '@angular/core';
import { CounterService } from './counter.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  activeUsers:string[] = [
    'Admin',
    'User2'
  ];
  
  unactiveUsers:string[]=[
    'User1',
    'User3',
    'User4'
  ];

  constructor(
    private counterService:CounterService
    ) { }

  disable(data:string){
    let index:number = this.activeUsers.indexOf(data);
    this.unactiveUsers.push(data);
    if (index > -1) {
      this.activeUsers.splice(index, 1);
    }
    this.counterService.disabled();
  }

  enable(data:string){
    let index:number = this.unactiveUsers.indexOf(data);
    this.activeUsers.push(data);
    if (index > -1) {
      this.unactiveUsers.splice(index, 1);
    }
    this.counterService.enabled();
  }

  add(data:string,flag:boolean){
      if(flag)this.activeUsers.push(data);
      else this.unactiveUsers.push(data);
  }

}
