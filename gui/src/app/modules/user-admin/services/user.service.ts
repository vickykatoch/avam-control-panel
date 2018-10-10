import { Injectable } from '@angular/core';
import { PageInfo, User } from '../store/models';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from './resource.service';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { ApolloClient } from 'apollo-client';

const allUsersQuery = gql`
  query allUsers($filter: UserFilterInput) {
    users(filter: $filter) {
      userId
      firstName
      lastName
      isActive
      createdAt
      updatedAt
      roles {
        id
        name
        isAdmin
        isActive
        resources {
          id
          name
          type
        }
      }
    }
  }
`;
const singleUserQuery = gql`
  query singleUser($userId: String!) {
    user(userId: $userId) {
      userId
      firstName
      lastName
      isActive
      createdAt
      updatedAt
      roles {
        id
        name
        isAdmin
        isActive
        resources {
          id
          name
          type
        }
      }
    }
  }
`;
const updateUser = gql`
  mutation UpdateUser($user: UserCreateUpdateInput!) {
    updateUser(user: $user) {
      userId
    }
  }
`;


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private clientProxy : ApolloClient<any>;
  constructor(private apollo: Apollo) {
    this.clientProxy = apollo.getClient();
  }
  fetch(): Promise<User[]> {
    const client = this.apollo.getClient();
    return client.query<any, any>({
      query: allUsersQuery,
      variables: {
        filter: {
          isActive: true
        }
      }
    }).then(result => result.data.users);
  }
  fetchAll(pageInfo?: PageInfo): Promise<User[]> {
    const client = this.apollo.getClient();
    return client.query<any, any>({
      query: allUsersQuery
    }).then(result => result.data.users);
  }
  saveUser(user: User): Promise<User> {
    return this.clientProxy.mutate({
      mutation : updateUser,
      variables : {
        user
      }
    }).then(({data})=> {
      return data.updateUser;
    });
  }
  fetchUser(userId: string): Promise<User> {
    return this.apollo.getClient().query<any, any>({
      query: singleUserQuery,
      variables: {
        userId
      },
      fetchPolicy: 'network-only'
    }).then(result => result.data.user);
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
