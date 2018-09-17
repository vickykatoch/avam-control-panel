import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'avam-user-host',
  templateUrl: './user-host.component.html',
  styleUrls: ['./user-host.component.scss']
})
export class UserHostComponent implements OnInit {
  isSingleUserShown = false;
  userId: string;

  constructor() { }

  ngOnInit() {
  }

  onNewOrEditUser(userId: string) {
    this.isSingleUserShown = true;
    this.userId = userId;
  }
  onUserSavedOrClosed() {
    this.isSingleUserShown = false;
    this.userId = undefined;
  }
}
