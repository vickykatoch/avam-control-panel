import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHostComponent } from './user-host.component';

describe('UserHostComponent', () => {
  let component: UserHostComponent;
  let fixture: ComponentFixture<UserHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
