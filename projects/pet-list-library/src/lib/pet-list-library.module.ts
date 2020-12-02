import { NgModule } from '@angular/core';
import { PetListLibraryComponent } from './pet-list-library.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PetListLibraryComponent],
  imports: [CommonModule],
  exports: [PetListLibraryComponent, CommonModule],
})
export class PetListLibraryModule {}
