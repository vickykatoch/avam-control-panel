import { TestBed, inject } from '@angular/core/testing';

import { AvamTabPanelService } from './avam-tab-panel.service';

describe('AvamTabPanelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvamTabPanelService]
    });
  });

  it('should be created', inject([AvamTabPanelService], (service: AvamTabPanelService) => {
    expect(service).toBeTruthy();
  }));
});
