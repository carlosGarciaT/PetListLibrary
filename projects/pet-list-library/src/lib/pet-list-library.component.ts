import { Component, Input, OnInit } from '@angular/core';
import { PetListLibraryService } from './pet-list-library.service';
import { ViewPets } from './pet.model';

@Component({
  selector: 'lib-petlist',
  template: `
    <p>
      pet-list-library works!
    </p>
  `,
  styles: [
  ]
})
export class PetListLibraryComponent implements OnInit {

  private petList: Array<ViewPets>;
  @Input() estado: string;

  constructor(private libraryService: PetListLibraryService) {
    this.libraryService.getPetsAvailable(this.estado).subscribe(res => this.petList = res);
   }

  ngOnInit(): void {
  }

}
