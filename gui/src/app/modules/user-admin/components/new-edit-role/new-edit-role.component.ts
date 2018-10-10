import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Resource, Role } from '../../store/models';
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

  constructor(private fb: FormBuilder) {
    this.roleFormGroup = this.fb.group({
      name: ['', Validators.required],
      isAdmin : false,
      isActive: true
    });
  }

  ngOnInit() {

  }
  onResourceSelected(resource: Resource) {

  }
  onSearch(query: string) : Observable<Resource[]> {
    return empty();
  }
  saveRole(e: Event) {
    e.preventDefault();
    // this.roleService.save(this.role).then(r => {
    //   this.roleSavedOrClosed.next();
    //   console.log(r);
    // }).catch(e => {
    //   console.error(e);
    // });
  }
}
