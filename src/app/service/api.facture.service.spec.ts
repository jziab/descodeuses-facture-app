import { TestBed } from '@angular/core/testing';

import { ApiFactureService } from './api.facture.service';

describe('ApiFactureService', () => {
  let service: ApiFactureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFactureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
