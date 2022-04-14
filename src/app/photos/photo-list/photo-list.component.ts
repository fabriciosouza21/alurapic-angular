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
export class PhotoListComponent implements OnInit, OnDestroy {

  title = 'alurapic';
  photos: Photo[] = [];
  filter: string = '';
  debounce : Subject<string> = new Subject<string>();
  constructor(
    private routerlinkanctive : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.photos = this.routerlinkanctive.snapshot.data['photos'];
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
    
  }
  onKeyUp(event: Event) {
    let filter = (event.target as HTMLInputElement).value;
    this.debounce.next(filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
