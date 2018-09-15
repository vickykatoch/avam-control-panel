import { Component, OnInit } from '@angular/core';
import { User } from '../../store/models/user';

@Component({
  selector: 'avam-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor() {
    this.users = this.buildGridData();
   }

  ngOnInit() {
  }

  // #region Temp Code
  private buildGridData() : User[] {
    return [
      {
        userId : 'GR867843',
        name : 'Balwinder Katoch',
        isActive : true,
        createdAt: new Date('2018-09-15 00:47:06.704 +00:00'),
        updatedAt: new Date('2018-09-15 00:47:06.704 +00:00')
      }, {
        userId : 'HR867843',
        name : 'Aryan Katoch',
        isActive : true,
        createdAt: new Date('2018-09-15 00:47:06.704 +00:00'),
        updatedAt: new Date('2018-09-15 00:47:06.704 +00:00')
      }, {
        userId : 'HT56843',
        name : 'Aadi Katoch',
        isActive : true,
        createdAt: new Date('2018-09-15 00:47:06.704 +00:00'),
        updatedAt: new Date('2018-09-15 00:47:06.704 +00:00')
      }, {
        userId : 'MJ5645643',
        name : 'Mamta Katoch',
        isActive : true,
        createdAt: new Date('2018-09-15 00:47:06.704 +00:00'),
        updatedAt: new Date('2018-09-15 00:47:06.704 +00:00')
      }
    ];
  }
  //#endregion
}
