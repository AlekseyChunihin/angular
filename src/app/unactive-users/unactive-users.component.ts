import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-unactive-users',
  templateUrl: './unactive-users.component.html',
  styleUrls: ['./unactive-users.component.css']
})
export class UnactiveUsersComponent implements OnInit {

  @Input() user:string;

  constructor(
    public userService:UserService
  ) { }

  ngOnInit() {
  }

}
