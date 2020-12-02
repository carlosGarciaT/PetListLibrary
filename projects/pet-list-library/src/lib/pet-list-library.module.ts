import { NgModule } from '@angular/core';
import { PetListLibraryComponent } from './pet-list-library.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PetListLibraryComponent],
  imports: [CommonModule, FormsModule],
  exports: [PetListLibraryComponent, FormsModule, CommonModule],
})
export class PetListLibraryModule {}
