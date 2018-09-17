import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { UserService, ResourceService } from '../../services';
import { User } from '../../store/models';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    private resourceService: ResourceService) {

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
    }
  }

  saveUser(e: Event) {
    const user = this.userFormGroup.value;
    this.userService.saveUser(user)
      .then(user => {
        console.info('User saved successfully', user);
        this.userSavedOrClosed.next();
        e.preventDefault();
      }).catch(console.error);
  }
}
