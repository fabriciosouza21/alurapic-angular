import { Component, OnInit } from '@angular/core';
import { Photo } from './photos/photo.interface';
import { PhotosService } from './photos/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'alurapic';
  photos: Photo[] = [];

  constructor(private photoService: PhotosService) { }

  ngOnInit(): void {
    this.photoService.listFromUser("flavio").subscribe(photos => {
      this.photos = photos;
    })
  }
}
