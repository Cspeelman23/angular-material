import { TestBed } from '@angular/core/testing';

import { FFShopService } from './ffshop.service';

describe('FFShopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FFShopService = TestBed.get(FFShopService);
    expect(service).toBeTruthy();
  });
});
