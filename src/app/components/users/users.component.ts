import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.updateUsersList();
  }

  deleteUser(id) {
    this.usersService.deleteUser(id).subscribe(
      (data) => this.updateUsersList(),
      (err) => console.log(err)
    );
  }

  updateUsersList() {
    this.usersService.getAllUsers().subscribe(
      (res) => {
        this.users = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
