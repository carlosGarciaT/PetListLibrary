import { NgModule } from '@angular/core';
import { PetListLibraryComponent } from './pet-list-library.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PetListLibraryComponent],
  imports: [
    HttpClientModule
  ],
  exports: [PetListLibraryComponent]
})
export class PetListLibraryModule { }
