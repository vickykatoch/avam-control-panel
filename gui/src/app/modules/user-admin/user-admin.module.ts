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
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services';
import { UserHostComponent } from './components/user-host/user-host.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AvamCommonControlsModule } from 'avam-common-controls';
import { RoleHostComponent } from './components/role-host/role-host.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AvamTabPanelModule,
    HttpClientModule,
    ReactiveFormsModule,
    AvamCommonControlsModule
  ],
  declarations: [
    SignInComponent,
    UserListComponent,
    RoleListComponent,
    ResourceListComponent,
    EditUserComponent,
    NewEditRoleComponent,
    UserAdminComponent,
    UserHostComponent,
    RoleHostComponent
  ],
  providers : [
    UserService
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
