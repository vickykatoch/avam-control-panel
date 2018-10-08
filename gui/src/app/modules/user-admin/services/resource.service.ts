import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role, Resource } from '../store/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private baseUrl = 'http://localhost:5000/api/admin/resources';

  constructor(private http: HttpClient) {

  }
  fetchAll() : Promise<Resource[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<Resource[]>(url).toPromise();
  }
  findById(resxId: number) : Promise<Resource> {
    const url = `${this.baseUrl}/${resxId}`;
    return this.http.get<Resource>(url).toPromise();
  }
  save(resource: Resource) : Promise<Resource> {
    const url = `${this.baseUrl}/new`;
    return this.http.post<Resource>(url, resource).toPromise();
  }
  getResourcesForRoles(roles: Role[]) : Promise<Resource[]> {
    const url = `${this.baseUrl}/roles`;
    const roleIds = roles.map(role=> role.id);
    return this.http.post<Resource[]>(url,roleIds).toPromise()
  }
  queryByName(query: string) : Observable<Resource[]> {
    const url = `${this.baseUrl}/query?name=${query}`;
    return this.http.get<Resource[]>(url);
  }
}
