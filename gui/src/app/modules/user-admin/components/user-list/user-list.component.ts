import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../store/models/user';
import { UserService } from '../../services';

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

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.fetchUsers();
  }

  //#region Event Handlers
  onRefresh() {
    this.fetchUsers();
  }

  //#endregion

  // #region Helper Methods
  private fetchUsers() {
    this.isBz = true;
    this.userService.fetchAll()
      .then(users => {
        this.users = users;
        this.isBz = false;
      }).catch(error => console.error(error));
  }
  //#endregion
}
