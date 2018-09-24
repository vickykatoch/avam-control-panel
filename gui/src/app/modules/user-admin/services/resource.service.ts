import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role, Resource } from '../store/models';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private baseUrl = 'http://localhost:5000/api/admin/resources';

  constructor(private http: HttpClient) {

  }
  getResourcesForRoles(roles: Role[]) : Promise<Resource[]> {
    const url = `${this.baseUrl}/roles`;
    const roleIds = roles.map(role=> role.id);
    return this.http.post<Resource[]>(url,roleIds).toPromise()
  }

}
