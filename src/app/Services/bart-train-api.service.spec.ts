import { TestBed } from '@angular/core/testing';

import { BartTrainApiService } from './bart-train-api.service';

describe('BartTrainApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BartTrainApiService = TestBed.get(BartTrainApiService);
    expect(service).toBeTruthy();
  });
});
