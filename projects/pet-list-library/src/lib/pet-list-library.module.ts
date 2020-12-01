import { NgModule } from '@angular/core';
import { PetListLibraryComponent } from './pet-list-library.component';
// import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PetListLibraryComponent],
  imports: [
    CommonModule,
    FormsModule,
    // HttpClientModule
  ],
  exports: [PetListLibraryComponent]
})
export class PetListLibraryModule { }
