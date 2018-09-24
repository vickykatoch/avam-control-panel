import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { UserService, RoleService, ResourceService } from '../../services';
import { User, Role } from '../../store/models';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'avam-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  @Output() userSavedOrClosed = new EventEmitter();
  userID = '';
  isEdit = false;
  user: User;
  userFormGroup: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder,
    private resouceService: ResourceService, private roleService: RoleService) {

  }

  @Input() set userId(value: string) {
    this.isEdit = value ? true : false;
    this.userID = value;
  }

  ngOnInit() {
    console.info('User : ' + this.userID);
    this.userFormGroup = this.fb.group({
      userId: '',
      name: '',
      isActive: false,
      password: ''
    });
    if (this.userID) {
      this.userService.fetchUser(this.userID)
        .then(user => {
          this.user = user;
          this.userFormGroup.patchValue(user);
        }).catch(console.error);
    } else {
      this.user = this.userFormGroup.value;
    }
  }

  saveUser(e: Event) {
    const usr = this.userFormGroup.value;
    usr.roles = this.user.roles;
    this.userService.saveUser(usr)
      .then(user => {
        console.info('User saved successfully', user);
        this.userSavedOrClosed.next();
        e.preventDefault();
      }).catch(console.error);
  }
  onSearch(filterString: string): Observable<Role[]> {
    return this.roleService.findByName(filterString);
  }
  onRoleSelected(role: Role) {
    this.user.roles = this.user.roles || [];
    if (!this.user.roles.some(x => x.name === role.name)) {
      this.user.roles.push(role);
      this.resouceService.getResourcesForRoles([role])
        .then(resources => {
          this.user.resources = this.user.resources || [];
          resources.forEach(res => {
            if (!this.user.resources.some(r => r.id === res.id)) {
              this.user.resources.push(res);
            }
          });
        }).catch(error => {
          console.error(error);
        })
    }
  }
  deleteRole(role: Role) {
    this.user.roles = this.user.roles.filter(rl => rl != role);
    if (!this.user.roles.length) {
      this.user.resources = [];
    } else {
      this.resouceService.getResourcesForRoles(this.user.roles)
        .then(resources => {
          this.user.resources = [];
          resources.forEach(res => {
            if (!this.user.resources.some(r => r.id === res.id)) {
              this.user.resources.push(res);
            }
          });
        }).catch(error => {
          console.error(error);
        });
    }
  }
  
}
