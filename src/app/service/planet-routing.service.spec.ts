import { TestBed } from '@angular/core/testing';

import { PlanetRoutingService } from './planet-routing.service';

describe('PlanetRoutingService', () => {
  let service: PlanetRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
