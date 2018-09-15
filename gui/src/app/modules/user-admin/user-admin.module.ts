import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SignInComponent, UserListComponent, RolesListComponent, ResourceListComponent]
})
export class UserAdminModule { }
