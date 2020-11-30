import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PetListLibraryService } from './pet-list-library.service';
import { ViewPet } from './pet.model';

@Component({
  selector: 'lib-petlist',
  template: `
    <ul *ngFor="let pet of petList">
      <li>
        ID: {{ pet.id }} --> Name: {{ pet.name }} --> Status: {{ pet.status }}
      </li>
    </ul>
  `,
  styles: [],
})
export class PetListLibraryComponent implements OnInit, OnChanges {
  petList: Array<ViewPet>;
  @Input() status: string;

  constructor(private libraryService: PetListLibraryService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.petList = this.libraryService.getPetsAvailable(this.status);
    // this.libraryService
    //   .getPetsAvailable(this.status)
    //   .subscribe((res) => (this.petList = res));
  }

  ngOnInit(): void {
    this.petList = this.libraryService.getPetsAvailable(this.status);
    // this.libraryService
    //   .getPetsAvailable(this.status)
    //   .subscribe((res) => (this.petList = res));
  }
}
