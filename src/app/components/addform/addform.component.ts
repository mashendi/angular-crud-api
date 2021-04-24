import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css'],
})
export class AddformComponent implements OnInit {
  name = '';
  age = null;
  email = '';
  phone = '';
  city = '';
  street = '';

  nameErr = false;
  ageErr = false;
  emailErr = false;
  phoneErr = false;
  cityErr = false;
  streetErr = false;

  userData: {};

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  get Name() {
    return this.formValidation.controls.name.valid;
  }

  get Age() {
    return this.formValidation.controls.age.valid;
  }

  get Email() {
    return this.formValidation.controls.email.valid;
  }

  get Phone() {
    return this.formValidation.controls.phone.valid;
  }

  get City() {
    return this.formValidation.controls.city.valid;
  }

  get Street() {
    return this.formValidation.controls.street.valid;
  }

  formValidation = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl(0, [Validators.required, Validators.min(18)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
  });

  addNewUser() {
    if (this.formValidation.valid) {
      this.userData = {
        name: this.name,
        age: this.age,
        email: this.email,
        phone: this.phone,
        address: {
          city: this.city,
          street: this.street,
        },
      };

      this.addUser(this.userData);
    } else {
      if (!this.Name) {
        this.nameErr = true;
      }
      if (!this.Age) {
        this.ageErr = true;
      }
      if (!this.Email) {
        this.emailErr = true;
      }
      if (!this.phone) {
        this.phoneErr = true;
      }
      if (!this.City) {
        this.cityErr = true;
      }
      if (!this.Street) {
        this.streetErr = true;
      }
    }
  }

  addUser(userData) {
    this.usersService.addNewUser(userData).subscribe(
      (data) => this.router.navigate(['']),
      (err) => console.log(err)
    );
  }
}
