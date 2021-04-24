import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersURL = 'http://localhost:3000/users';
  constructor(private usersClient: HttpClient) {}

  getAllUsers() {
    return this.usersClient.get(this.usersURL);
  }

  getUserById(id) {
    return this.usersClient.get(`${this.usersURL}/${id}`);
  }

  addNewUser(user) {
    return this.usersClient.post(this.usersURL, user);
  }

  updateUser(id, user){
    return this.usersClient.put(`${this.usersURL}/${id}`, user);
  }

  deleteUser(id) {
    return this.usersClient.delete(`${this.usersURL}/${id}`);
  }
}
