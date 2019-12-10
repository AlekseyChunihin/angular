import { Component, OnInit, Input} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() user:string;


  constructor(
    public userService:UserService
  ) { }

  ngOnInit() {
  }

}
