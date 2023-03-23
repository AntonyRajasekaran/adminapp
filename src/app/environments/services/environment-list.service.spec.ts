import { TestBed } from '@angular/core/testing';

import { EnvironmentListService } from './environment-list.service';

describe('EnvironmentListService', () => {
  let service: EnvironmentListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvironmentListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
