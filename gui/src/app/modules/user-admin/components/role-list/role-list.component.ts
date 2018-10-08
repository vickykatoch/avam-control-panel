import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Role } from '../../store/models/role';
import { RoleService } from '../../services';

@Component({
  selector: 'avam-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {
  roles: Role[] = [];
  isBz = false;
  @Output() editRole = new EventEmitter<number>();
  @Output() newRole = new EventEmitter();

  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.isBz=true;
    this.roleService.fetchRoles().subscribe(roles=> {
      this.isBz=false;
      this.roles = roles;
    });
  }

  // #region Temp Code

  //#endregion
}
