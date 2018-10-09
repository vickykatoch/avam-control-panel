import { Injectable } from '@angular/core';
import { Apollo, Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { User } from '../store/models';

export interface Response {
  user : User;
}

@Injectable({
  providedIn: 'root'
})
export class UserGQLQueryService extends Query<Response> {
  document = gql`
    query allUsers {
     getUser {
        userId
        firstName
        lastName
        isActive
        createdAt
        updatedAt
      }
    }
  `;

}
