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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AvamCommonControlsModule } from 'avam-common-controls';
import { RoleHostComponent } from './components/role-host/role-host.component';
import { ResourceHostComponent } from './components/resource-host/resource-host.component';
import { ResourceInfoComponent } from './components/resource-info/resource-info.component';
import {TreeTableModule} from 'primeng/treetable';

import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { UserGQLQueryService } from './services/user-gqlquery.service';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ApolloModule,
    HttpLinkModule,
    AvamTabPanelModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AvamCommonControlsModule,
    TreeTableModule
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
    RoleHostComponent,
    ResourceHostComponent,
    ResourceInfoComponent
  ],
  providers : [
    UserService,
    UserGQLQueryService,
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: "http://localhost:4000"
          })
        }
      },
      deps: [HttpLink]
    }
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
