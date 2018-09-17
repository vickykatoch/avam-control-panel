import { Injectable } from '@angular/core';
import { PageInfo, User } from '../store/models';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from './resource.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:5000/api/admin/users';
  constructor(private http: HttpClient, private resourceService: ResourceService) {

  }

  fetchAll(pageInfo?: PageInfo): Promise<User[]> {
    const url = this.baseUrl;
    return this.http.get<User[]>(url).toPromise();
  }
  saveUser(user: User): Promise<User> {
    const url = `${this.baseUrl}/save`;
    return this.http.post<User>(url, user).toPromise();
  }
  fetchUser(userId: string): Promise<User> {
    const url = `${this.baseUrl}/${userId}`;
    return this.http.get<User>(url).pipe(
      map(this.transformUser)).toPromise();
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
