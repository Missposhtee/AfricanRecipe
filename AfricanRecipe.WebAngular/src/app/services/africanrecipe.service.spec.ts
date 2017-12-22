import { TestBed, inject } from '@angular/core/testing';

import { AfricanrecipeService } from './africanrecipe.service';

describe('AfricanrecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfricanrecipeService]
    });
  });

  it('should be created', inject([AfricanrecipeService], (service: AfricanrecipeService) => {
    expect(service).toBeTruthy();
  }));
});
