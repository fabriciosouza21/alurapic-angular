import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor( private http : HttpClient ) { }

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(`http://localhost:3000/${userName}/photos`);
  }
}
