import { Injectable } from '@angular/core';
import { Role } from '../store/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseUrl = 'http://localhost:5000/api/admin/roles';

  constructor(private http: HttpClient) {

  }
  save(role: Role) : Promise<Role> {
    const url=`${this.baseUrl}/save`;
    return this.http.post<Role>(url, role).toPromise();
  }
  fetchRole(roleId: number) : Promise<Role> {
    const url=`${this.baseUrl}/${roleId}`;
    return this.http.get<Role>(url).toPromise();
  }

  fetchRoles() : Promise<Role[]> {
    const url=`${this.baseUrl}`;
    return this.http.get<Role[]>(url).toPromise();
  }

  findByName(name: string) : Observable<Role[]> {
    const url = `${this.baseUrl}?name=${name}`;
    return this.http.get<Role[]>(url);
  }

}
