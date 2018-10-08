import { Injectable } from '@angular/core';
import { PageInfo, User } from '../store/models';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from './resource.service';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';

const allUsersQuery = gql`
  query allUsers {
    getAllUsers {
      userId
      firstName
      lastName
      isActive
      createdAt
      updatedAt
      roles {
        id,
        name,
        isActive
      }
    }
  }
`;
const singleUserQuery = gql`
  query singleUser {
    getUser {
      userId
      firstName
      lastName
      isActive
      createdAt
      updatedAt
      roles {
        id,
        name,
        isActive
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
   constructor(private apollo: Apollo) {

  }

  fetchAll(pageInfo?: PageInfo): Observable<User[]> {
    return this.apollo.watchQuery<any>({
      query: allUsersQuery
    }).valueChanges.pipe(map(({data})=> data.getAllUsers));
  }
  saveUser(user: User): Promise<User> {
    // const url = `${this.baseUrl}/save`;
    // return this.http.post<User>(url, user).toPromise();
  }
  fetchUser(userId: string): Observable<User> {
    return this.apollo.watchQuery<any>({
      query: singleUserQuery
    }).valueChanges.pipe(map(({data})=> {
      debugger;
      return data.getUser;
    }));
  }

  //#region Helper Methods
  private transformUser(user: User): User {
    user.resources = [];
    if (user.roles) {
      user.roles.forEach(role => {
        if (role.resources) {
          role.resources.forEach(res => {
            if (!user.resources.some(rs => rs.id === res.id)) {
              user.resources.push(res);
            }
          });
        }
      });
    }
    return user;
  }
  //#endregion
}
