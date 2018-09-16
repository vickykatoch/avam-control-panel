import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditRoleComponent } from './new-edit-role.component';

describe('NewEditRoleComponent', () => {
  let component: NewEditRoleComponent;
  let fixture: ComponentFixture<NewEditRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEditRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
