import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo.interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit, OnChanges {

  @Input() photos: Photo[] = [];
  row :any = [];
  constructor() {
    
  }
   

  ngOnInit(): void {

  }

  ngOnChanges( changes: SimpleChanges ): void {
      if(changes["photos"]){
        this.row = this.groupColumns(this.photos);
      }
  }

  groupColumns(photos: Photo[]) {
    const newPhotos = [];
    for (let index=0; index < photos.length; index += 3) {
      newPhotos.push(photos.slice(index,index + 3));
    }
    return newPhotos;
  }

}
