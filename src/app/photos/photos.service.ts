import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from './photo.interface';
import { PhotoComment } from './photo-comment';
import { catchError, map, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(`${API_URL}/${userName}/photos`);
  }
  listFromUserPagenated(userName: string, page: number) {
    const params = new HttpParams()
      .append('page', page.toString());
    return this.http.get<Photo[]>(`${API_URL}/${userName}/photos`, { params });
  }

  upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);
    return this.http.post(`${API_URL}/photos/upload`, formData);
  }

  findById(photoId: number) {
    return this.http.get<Photo>(`${API_URL}/photos/${photoId}`);
  }

  getComments(photoId: number) {
    return this.http.get<PhotoComment[]>(`${API_URL}/photos/${photoId}/comments`);
  }

  addComment(photoId: number, commentText: string) {
    return this.http.post(`${API_URL}/photos/${photoId}/comments`, { commentText });
  }

  removePhoto(photoId: number) {
    return this.http.delete(`${API_URL}/photos/${photoId}`);
  }

  like(photoId: number) {
    return this.http.post(`${API_URL}/photos/${photoId}/like`, {}, { observe: 'response' })
      .pipe(map(res => true))
      .pipe(catchError(error => {
        return error.status == '304' ? of(false) : throwError(() => { return error;} );
      }))
  }

}
