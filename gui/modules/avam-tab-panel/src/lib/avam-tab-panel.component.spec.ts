import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvamTabPanelComponent } from './avam-tab-panel.component';

describe('AvamTabPanelComponent', () => {
  let component: AvamTabPanelComponent;
  let fixture: ComponentFixture<AvamTabPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvamTabPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvamTabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
