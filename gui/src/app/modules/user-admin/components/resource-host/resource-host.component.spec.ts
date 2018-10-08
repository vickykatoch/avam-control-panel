import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceHostComponent } from './resource-host.component';

describe('ResourceHostComponent', () => {
  let component: ResourceHostComponent;
  let fixture: ComponentFixture<ResourceHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
