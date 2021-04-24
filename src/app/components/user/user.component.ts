import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id;
  user;
  constructor(private usersService: UsersService, route: ActivatedRoute) {
    this.id = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.usersService.getUserById(this.id).subscribe(
      (res) => {
        this.user = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
