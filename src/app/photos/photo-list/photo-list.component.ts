import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { Photo } from '../photo.interface';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  title = 'alurapic';
  photos: Photo[] = [];

  constructor(
    private photoService: PhotosService,
    private routerlinkanctive : ActivatedRoute
    ) { }

  ngOnInit(): void {
    const userName =  this.routerlinkanctive.snapshot.paramMap.get('userName') || '';
    
    this.photoService.listFromUser(userName).subscribe(photos => {
      this.photos = photos;
    })
  }

}
