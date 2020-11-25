import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetListLibraryService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://petstore.swagger.io/v2/pet/';
   }

   getPetsAvailable(estado): Observable<any>{
    return this.http.get(this.url + 'findByStatus?status=' + estado).pipe(map((res: any[]) => {

    }));
   }
   /*
   class Pets:
    id: number,
    category: Category,
    name: string,
    photoUrls: string[],
    tags: Tags[],
    status: string

    class Category
    id: number,
    name: string

    class Tags
    id: number,
    name: string
   */
}
