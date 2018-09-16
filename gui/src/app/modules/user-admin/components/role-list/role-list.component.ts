import { Component, OnInit } from '@angular/core';
import { Role } from '../../store/models/role';

@Component({
  selector: 'avam-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {
  roles: Role[] = [];

  constructor() { }

  ngOnInit() {
    this.roles= this.buildGridData();
  }

  // #region Temp Code
  private buildGridData() : Role[] {
    return [
      {
        id : 1,
        name : 'Administrator',
        isActive : true,
        isAdmin: true,
        createdAt: new Date('2018-09-15 00:47:06.704 +00:00'),
        updatedAt: new Date('2018-09-15 00:47:06.704 +00:00')
      }, {
        id : 2,
        name : 'SuperUser',
        isActive : true,
        isAdmin: true,
        createdAt: new Date('2018-09-15 00:47:06.704 +00:00'),
        updatedAt: new Date('2018-09-15 00:47:06.704 +00:00')
      }, {
        id : 3,
        name : 'Normal User',
        isActive : false,
        isAdmin: true,
        createdAt: new Date('2018-09-15 00:47:06.704 +00:00'),
        updatedAt: new Date('2018-09-15 00:47:06.704 +00:00')
      }, {
        id : 4,
        name : 'Desk User',
        isActive : true,
        isAdmin: false,
        createdAt: new Date('2018-09-15 00:47:06.704 +00:00'),
        updatedAt: new Date('2018-09-15 00:47:06.704 +00:00')
      }
    ];
  }
  //#endregion
}
