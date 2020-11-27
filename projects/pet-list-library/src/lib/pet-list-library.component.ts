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
    console.log(this.status);
    this.libraryService
      .getPetsAvailable(this.status)
      .subscribe((res) => (this.petList = res));
    console.log(this.petList);
  }

  ngOnInit(): void {
    this.libraryService
      .getPetsAvailable(this.status)
      .subscribe((res) => (this.petList = res));
  }
}
