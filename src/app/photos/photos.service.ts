import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from './photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor( private http : HttpClient ) { }

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(`http://localhost:3000/${userName}/photos`);
  }
  listFromUserPagenated(userName: string, page: number) {
    const params = new HttpParams()
    .append('page', page.toString());
    return this.http.get<Photo[]>(`http://localhost:3000/${userName}/photos`, {params});
  }
}
