import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pet, ViewPets } from './pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetListLibraryService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://petstore.swagger.io/v2/pet/';
   }

   getPetsAvailable(estado): Observable<Array<ViewPets>>{
    return this.http.get(this.url + 'findByStatus?status=' + estado).pipe(map((res: Pet[]) => {
      const auxList: Array<ViewPets> = [];
      res.forEach(p => {
        let aux: ViewPets;
        aux = {
          id: p.id,
          name: p.name,
          status: p.status
        };
        auxList.push(aux);
      });
      return auxList;
    }));
   }
}
