import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { AddformComponent } from './components/addform/addform.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from './components/user-edit/user-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserComponent },
  {path:'users/:id/edit', component:UserEditComponent},
  { path: 'add', component: AddformComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    AddformComponent,
    ErrorComponent,
    UserEditComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
