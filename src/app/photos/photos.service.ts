import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from './photo.interface';
import { PhotoComment } from './photo-comment';

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

  upload(description: string, allowComments: boolean, file: File){
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);
    return this.http.post('http://localhost:3000/photos/upload', formData);
  }

  findById(photoId: number){
    return this.http.get<Photo>(`http://localhost:3000/photos/${photoId}`);
  }

  getComments(photoId: number){
    return this.http.get<PhotoComment[]>(`http://localhost:3000/photos/${photoId}/comments`);
  }

  addComment(photoId: number, commentText: string){
    return this.http.post(`http://localhost:3000/photos/${photoId}/comments`, {commentText});
  }

}
