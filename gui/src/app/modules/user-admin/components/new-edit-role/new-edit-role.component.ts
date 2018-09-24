import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.roleFormGroup = this.fb.group({

    });
  }

  saveRole(e: Event) {

  }
}
