import { Injectable } from '@angular/core';
import { Role } from '../store/models';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

const allRolesQuery = gql`
  query allRoles {
    getAllRoles {
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
  query singleRole {
    getRole {
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

  constructor(private apollo: Apollo) {

  }
  // save(role: Role) : Promise<Role> {
  //   const url=`${this.baseUrl}/save`;
  //   return this.http.post<Role>(url, role).toPromise();
  // }
  fetchRole(roleId: number): Observable<Role> {
    return this.apollo.watchQuery<any>({
      query: allRolesQuery
    }).valueChanges.pipe(map(({ data }) => {
      return data.getAllRoles;
    }));
  }

  fetchRoles(): Observable<Role[]> {
    return this.apollo.watchQuery<any>({
      query: allRolesQuery
    }).valueChanges.pipe(map(({ data }) => {
      return data.getAllRoles;
    }));
  }
  // findByName(name: string): Observable<Role[]> {
  //   // const url = `${this.baseUrl}?name=${name}`;
  //   // return this.http.get<Role[]>(url);
  // }

}
