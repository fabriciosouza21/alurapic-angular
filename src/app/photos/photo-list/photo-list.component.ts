import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterLinkActive } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { Photo } from '../photo.interface';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  hasMore = true;
  correntPage = 1;
  title = 'alurapic';
  userName = '';
  photos: Photo[] = [];
  filter: string = '';
  debounce : Subject<string> = new Subject<string>();
  constructor(
    private routerlinkanctive : ActivatedRoute,
    private photoService: PhotosService
    ) { }

  ngOnInit(): void {
    this.routerlinkanctive.params.subscribe(params => {
      this.userName = this.routerlinkanctive.snapshot.params['userName'];
      this.photos = this.routerlinkanctive.snapshot.data['photos'];
    })


  }
  onKeyUp(event: Event) {
    let filter = (event.target as HTMLInputElement).value;
    this.debounce.next(filter);
  }

  load() {
    this.photoService.listFromUserPagenated(this.userName, ++this.correntPage).subscribe(photos => {
      this.photos = this.photos.concat(photos);
      if(!photos.length) this.hasMore = false;
      this.filter = '';
    });
  }
  filterAtrribuitter(event:any){
    this.filter = event
  }
}
