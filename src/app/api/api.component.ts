import { Component } from '@angular/core';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.css',
})
export class ApiComponent {
  users: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    let userData = this.userService.getUsers();

    userData.subscribe((res) => {
      this.users = res;
    });
  }
}
