import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterLinkActive } from '@angular/router';
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
  filter: string = '';
  constructor(
    private routerlinkanctive : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.photos = this.routerlinkanctive.snapshot.data['photos'];
  }
  onKeyUp(event: Event) {
    this.filter = (event.target as HTMLInputElement).value;
  }

}
