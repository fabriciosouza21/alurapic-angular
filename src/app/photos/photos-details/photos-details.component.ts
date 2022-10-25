import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoComment } from '../photo-comment';
import { Photo } from '../photo.interface';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos-details',
  templateUrl: './photos-details.component.html',
  styleUrls: ['./photos-details.component.css']
})
export class PhotosDetailsComponent implements OnInit {

  photo$: Observable<Photo>;

  constructor(
    private router: ActivatedRoute,
    private photoService: PhotosService
  ) {
    const id = this.router.snapshot.params["photoId"];
    this.photo$ = this.photoService.findById(id);
  }

  ngOnInit(): void {

  }

}
