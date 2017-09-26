import { TestBed, inject } from '@angular/core/testing';

import { FitnessApiService } from './fitness-api.service';

describe('FitnessApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FitnessApiService]
    });
  });

  it('should be created', inject([FitnessApiService], (service: FitnessApiService) => {
    expect(service).toBeTruthy();
  }));
});
