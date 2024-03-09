import { TestBed } from '@angular/core/testing';

import { RecipedataService } from './recipedata.service';

describe('RecipedataService', () => {
  let service: RecipedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
