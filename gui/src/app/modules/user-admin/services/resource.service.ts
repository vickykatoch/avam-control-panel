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


}
