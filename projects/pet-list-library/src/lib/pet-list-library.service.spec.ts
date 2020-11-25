import { TestBed } from '@angular/core/testing';

import { PetListLibraryService } from './pet-list-library.service';

describe('PetListLibraryService', () => {
  let service: PetListLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetListLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
