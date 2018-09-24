import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleHostComponent } from './role-host.component';

describe('RoleHostComponent', () => {
  let component: RoleHostComponent;
  let fixture: ComponentFixture<RoleHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
