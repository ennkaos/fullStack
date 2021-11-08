import { TestBed } from '@angular/core/testing';

import { PatienceService } from './patience.service';

describe('PatienceService', () => {
  let service: PatienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
