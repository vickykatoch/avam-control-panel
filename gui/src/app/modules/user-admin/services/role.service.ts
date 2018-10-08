import { Injectable } from '@angular/core';
import { Role } from '../store/models';
import { HttpClient } from '@angular/common/http';
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

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private apollo: Apollo) {

  }

  fetchRoles(): Observable<Role[]> {
    return this.apollo.watchQuery<any>({
      query: allRolesQuery
    }).valueChanges.pipe(map(({ data }) => {
      return data.getAllRoles;
    }));
  }

  findByName(name: string): Observable<Role[]> {
    // const url = `${this.baseUrl}?name=${name}`;
    // return this.http.get<Role[]>(url);
  }

}
