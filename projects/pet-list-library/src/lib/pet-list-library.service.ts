import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pet, ViewPet } from './pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetListLibraryService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://petstore.swagger.io/v2/';
   }

   getPetsAvailable(estado: string): Observable<Array<ViewPet>>{
    return this.http.get(this.url + 'pet/findByStatus?status=' + estado).pipe(map((res: Pet[]) => {
      const auxList: Array<ViewPet> = [];
      res.forEach(p => {
        let aux: ViewPet;
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
