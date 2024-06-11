import { TestBed } from '@angular/core/testing';

import { AbcService } from './abc.service';

describe('AbcService', () => {
  let service: AbcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
