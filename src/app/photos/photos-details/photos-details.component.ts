import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo.interface';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos-details',
  templateUrl: './photos-details.component.html',
  styleUrls: ['./photos-details.component.css']
})
export class PhotosDetailsComponent implements OnInit {

  photo : Observable<Photo>
  constructor(
    private router: ActivatedRoute,
    private photoService: PhotosService
    ) {
      this.photo = this.photoService.findById(
        this.router.snapshot.params['photoId']
      )
     }

  ngOnInit(): void {

  }

}
