import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'avam-role-host',
  templateUrl: './role-host.component.html',
  styles: []
})
export class RoleHostComponent implements OnInit {
  isSingleRoleShown = false;
  roleId : number;

  constructor() { }

  ngOnInit() {
  }

  onNewOrEditRole(roleId: number) {
    this.isSingleRoleShown = true;
    this.roleId = roleId;
  }
  onRoleSavedOrClosed() {
    this.isSingleRoleShown = false;
    this.roleId = undefined;
  }

}
