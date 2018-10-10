import { Injectable } from '@angular/core';
import { Role } from '../store/models';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { ApolloClient } from 'apollo-client';

const allRolesQuery = gql`
  query allRoles($name : String) {
    roles(name: $name) {
      id
      name
      isActive
      isAdmin
      createdAt
      updatedAt
      resources {
        id
        name
        type
      }
    }
  }
`;
const singleRoleQuery = gql`
  query singleRole($roleId: Int) {
    role(roleId: $roleId) {
      id
      name
      isActive
      isAdmin
      createdAt
      updatedAt
      resources {
        id
        name
        type
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private clientProxy : ApolloClient<any>;
  constructor(private apollo: Apollo) {
    this.clientProxy = apollo.getClient();
  }
  // save(role: Role) : Promise<Role> {
  //   const url=`${this.baseUrl}/save`;
  //   return this.http.post<Role>(url, role).toPromise();
  // }
  fetchRole(roleId: number): Promise<Role> {
    return this.clientProxy.query<any,any>({
      query: singleRoleQuery,
      variables: {
        filter: {
          roleId
        }
      }
    }).then(({data})=> data.role);
  }

  fetchRoles(name?: string): Promise<Role[]> {
    return this.clientProxy.query<any,any>({
      query: allRolesQuery,
      variables: {
        name
      },
      fetchPolicy : 'network-only'
    }).then(({data})=> data.roles);
  }
}
