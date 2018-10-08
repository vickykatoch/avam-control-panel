import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RoleService, ResourceService } from '../../services';
import { Role, Resource } from '../../store/models';
import { Observable, empty } from 'rxjs';

@Component({
  selector: 'avam-new-edit-role',
  templateUrl: './new-edit-role.component.html',
  styleUrls: ['./new-edit-role.component.scss']
})
export class NewEditRoleComponent implements OnInit {

  @Output() roleSavedOrClosed = new EventEmitter();
  roleID: number;
  isEdit = false;
  roleFormGroup: FormGroup;
  role: Role;

  @Input() set roleId(value: number) {
    this.isEdit = value ? true : false;
    this.roleID = value;
  }

  constructor(private fb: FormBuilder, private roleService: RoleService,
    private resourceService: ResourceService) {
    this.role = {
      id: undefined,
      name: '',
      isActive: true,
      isAdmin: false,
      resources: []
    };
  }

  ngOnInit() {
    this.roleFormGroup = this.fb.group({
      name: '',
      isAdmin: false,
      isActive: true
    });
    if (this.roleID) {
      this.roleService.fetchRole(this.roleID)
        .then(role => {
          this.role = Object.assign({}, role);
          this.role.resources = role.resources || [];
          this.roleFormGroup.patchValue(role);
        }).catch(console.error);
    } else {
      this.roleFormGroup.patchValue(this.role);
    }
  }
  onResourceSelected(resource: Resource) {
    if (!this.role.resources.some(x => x.id === resource.id)) {
      this.role.resources.push(resource);
    }
  }

  deleteResource(resource: Resource) {
    this.role.resources = this.role.resources.filter(res => res !== resource);
  }
  onSearch(query: string): Observable<Resource[]> {
    return this.resourceService.queryByName(query);
  }
  saveRole(e: Event) {
    e.preventDefault();
    this.roleService.save(this.role).then(r => {
      this.roleSavedOrClosed.next();
      console.log(r);
    }).catch(e => {
      console.error(e);
    });
  }
}
