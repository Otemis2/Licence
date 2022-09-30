import { TestBed } from '@angular/core/testing';

import { LocalOutService } from './local-out.service';

describe('LocalOutService', () => {
  let service: LocalOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
