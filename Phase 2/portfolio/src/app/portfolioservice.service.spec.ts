import { TestBed } from '@angular/core/testing';

import { PortfolioserviceService } from './portfolioservice.service';

describe('PortfolioserviceService', () => {
  let service: PortfolioserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
