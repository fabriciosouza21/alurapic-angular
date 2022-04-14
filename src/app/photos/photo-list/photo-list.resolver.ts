import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Photo } from '../photo.interface';
import { PhotosService } from '../photos.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

  constructor(private photoService: PhotosService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
    const userName = route.params['userName'];
    return this.photoService.listFromUserPagenated(userName,1);
  }
}
