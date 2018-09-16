import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { SharedModule } from '../shared';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NewEditRoleComponent } from './components/new-edit-role/new-edit-role.component';
import { AvamTabPanelModule } from 'avam-tab-panel';
import { UserAdminComponent } from './user-admin.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AvamTabPanelModule
  ],
  declarations: [
    SignInComponent,
    UserListComponent,
    RoleListComponent,
    ResourceListComponent,
    EditUserComponent,
    NewEditRoleComponent,
    UserAdminComponent
  ],
  exports :[
    SignInComponent,
    UserListComponent,
    RoleListComponent,
    ResourceListComponent,
    UserAdminComponent
  ]
})
export class UserAdminModule { }
