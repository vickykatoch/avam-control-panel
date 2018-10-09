import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { UserService, RoleService, ResourceService } from '../../services';
import { User, Role, Resource } from '../../store/models';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { TreeNode } from 'primeng/api';

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
  userResources: Resource[] = [];
  nodes: TreeNode[] = [];

  constructor(private userService: UserService, private fb: FormBuilder,
    private resouceService: ResourceService, private roleService: RoleService) {

  }

  @Input() set userId(value: string) {
    this.isEdit = value ? true : false;
    this.userID = value;
  }

  ngOnInit() {
    this.userFormGroup = this.fb.group({
      userId: '',
      firstName: '',
      lastName: '',
      isActive: false
    });
    if (this.userID) {
      this.userService.fetchUser(this.userID)
        .then(user => {
          this.user = user;
          this.resolveTree(user);
          this.userResources = this.resolveUserResource(user);
          this.userFormGroup.patchValue(user);
        });
    } else {
      this.user = this.userFormGroup.value;
    }
  }

  saveUser(e: Event) {
    const usr = this.userFormGroup.value;
    usr.roles = this.user.roles;
    // this.userService.saveUser(usr)
    //   .then(user => {
    //     console.info('User saved successfully', user);
    //     this.userSavedOrClosed.next();
    //     e.preventDefault();
    //   }).catch(console.error);
  }
  onSearch(filterString: string): Observable<Role[]> {
    return of([]);
    // return this.roleService.findByName(filterString);
  }
  onRoleSelected(role: Role) {
    this.user.roles = this.user.roles || [];
    if (!this.user.roles.some(x => x.name === role.name)) {
      this.user.roles.push(role);
      // this.resouceService.getResourcesForRoles([role])
      //   .then(resources => {
      //     this.user.resources = this.user.resources || [];
      //     resources.forEach(res => {
      //       if (!this.user.resources.some(r => r.id === res.id)) {
      //         this.user.resources.push(res);
      //       }
      //     });
      //   }).catch(error => {
      //     console.error(error);
      //   })
    }
  }
  deleteRole(role: Role) {
    this.user.roles = this.user.roles.filter(rl => rl != role);
    if (!this.user.roles.length) {
      this.user.resources = [];
    } else {
      // this.resouceService.getResourcesForRoles(this.user.roles)
      //   .then(resources => {
      //     this.user.resources = [];
      //     resources.forEach(res => {
      //       if (!this.user.resources.some(r => r.id === res.id)) {
      //         this.user.resources.push(res);
      //       }
      //     });
      //   }).catch(error => {
      //     console.error(error);
      //   });
    }
  }
  private resolveTree(user: User) {
    debugger;
    const nodes = user.roles.map(role => {
      const node = {
        data: role,
        children: role.resources.map(res => ({ data: res }))
      };
      return node;
    });
    this.nodes = nodes;
  }
  resolveUserResource(user: User): Resource[] {
    const resx = {};
    user.roles.forEach(role => {
      role.resources.forEach(res => {
        resx[res.id] = res;
      });
    });
    return Object.values(resx);
  }
}
