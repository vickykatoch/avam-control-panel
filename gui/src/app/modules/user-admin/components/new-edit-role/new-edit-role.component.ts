import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Resource } from '../../store/models';
import { Observable, empty } from 'rxjs';

@Component({
  selector: 'avam-new-edit-role',
  templateUrl: './new-edit-role.component.html',
  styles: []
})
export class NewEditRoleComponent implements OnInit {

  @Output() roleSavedOrClosed = new EventEmitter();
  roleID: number;
  isEdit = false;
  roleFormGroup: FormGroup;

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

  }
}
