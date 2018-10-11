import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../store/models/user';
import { UserService } from '../../services';
import { UserGQLQueryService } from '../../services/user-gqlquery.service';

@Component({
  selector: 'avam-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  isBz = true;
  @Output() editUser = new EventEmitter<string>();
  @Output() newUser = new EventEmitter();

  constructor(private userService: UserService, private userSVC: UserGQLQueryService) {
  }

  ngOnInit() {
    this.fetchUsers();
  }
  ngOnDestroy() {
    console.log('Destroyed');
  }
  //#region Event Handlers
  onRefresh() {
    this.fetchUsers();
  }
  getRoleNames(user: User): string {
    if (user.roles && user.roles.length) {
      return user.roles.reduce((p, c) => {
        return p ? `${p}, ${c.name}` : `${c.name}`;
      }, '');
    }
    return '';
  }

  //#endregion

  // #region Helper Methods
  private fetchUsers() {
    this.isBz = true;
    this.userService.fetch().then(users => {
      this.users = users;
      this.isBz = false;
    });
  }
  //#endregion
}
