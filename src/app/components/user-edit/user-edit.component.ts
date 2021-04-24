import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
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

  id;
  userData: {};

  constructor(
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.usersService.getUserById(this.id).subscribe(
      (userData) => {
        this.initData(userData);
      },
      (err) => console.log(err)
    );
  }

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

  saveUser() {
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

      this.saveData(this.userData);
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

  saveData(userData) {
    this.usersService.updateUser(this.id, userData).subscribe(
      (data) => this.router.navigate(['']),
      (err) => console.log(err)
    );
  }

  initData(userData) {
    this.userData = userData;
    this.name = userData.name;
    this.age = userData.age;
    this.email = userData.email;
    this.phone = userData.phone;
    this.city = userData.address.city;
    this.street = userData.address.street;
  }
}
