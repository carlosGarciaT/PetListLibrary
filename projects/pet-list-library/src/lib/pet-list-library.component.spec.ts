import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListLibraryComponent } from './pet-list-library.component';

describe('PetListLibraryComponent', () => {
  let component: PetListLibraryComponent;
  let fixture: ComponentFixture<PetListLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetListLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetListLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
