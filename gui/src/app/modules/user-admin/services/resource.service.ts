import { Injectable } from '@angular/core';
import { Role, Resource } from '../store/models';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


const allResourceQuery = gql`
  query allResources {
    getAllResources {
      id
      name
      type
      isActive
      createdAt
      updatedAt

    }
  }
`;


@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private apollo: Apollo) {

  }
  fetchAll() : Observable<Resource[]> {
    return this.apollo.watchQuery<any>({
      query : allResourceQuery
    }).valueChanges.pipe(
      map(({data})=> {
        return data.getAllResources;
      })
    );
    // return this.apollo.watchQuery<any>({
    //   query: allResourceQuery
    // }).valueChanges.pipe(map(({ data }) => {
    //   return <Resource[]>data.getAllResources;
    // }));
  }
  // findById(resxId: number) : Promise<Resource> {
  //   // const url = `${this.baseUrl}/${resxId}`;
  //   // return this.http.get<Resource>(url).toPromise();
  // }
  // save(resource: Resource) : Promise<Resource> {
  //   const url = `${this.baseUrl}/new`;
  //   return this.http.post<Resource>(url, resource).toPromise();
  // }
  // getResourcesForRoles(roles: Role[]) : Promise<Resource[]> {
  //   const url = `${this.baseUrl}/roles`;
  //   const roleIds = roles.map(role=> role.id);
  //   return this.http.post<Resource[]>(url,roleIds).toPromise()
  // }
  // queryByName(query: string) : Observable<Resource[]> {
  //   const url = `${this.baseUrl}/query?name=${query}`;
  //   return this.http.get<Resource[]>(url);
  // }
}
