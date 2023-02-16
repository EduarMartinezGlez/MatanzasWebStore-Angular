import { TestBed } from '@angular/core/testing';

import { ProdgrillService } from './prodgrill.service';

describe('ProdgrillService', () => {
  let service: ProdgrillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdgrillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
