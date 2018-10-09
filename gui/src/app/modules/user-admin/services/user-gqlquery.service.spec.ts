import { TestBed, inject } from '@angular/core/testing';

import { UserGQLQueryService } from './user-gqlquery.service';

describe('UserGQLQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserGQLQueryService]
    });
  });

  it('should be created', inject([UserGQLQueryService], (service: UserGQLQueryService) => {
    expect(service).toBeTruthy();
  }));
});
