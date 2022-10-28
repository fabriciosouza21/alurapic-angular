import { Component, Input, OnInit } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { PhotoComment } from '../../photo-comment';
import { PhotosService } from '../../photos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: number = 0;
  comments$: Observable<PhotoComment[]> = new Observable<PhotoComment[]>();

  formComment : FormGroup = this.fb.group({
    comment: ['', [Validators.maxLength(300)]]
  });

  constructor(private photosService: PhotosService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    console.log(this.photoId);
    this.comments$ = this.photosService.getComments(this.photoId);
  }

  save(){
    const comment = this.formComment.get('comment')?.value as string;
    this.comments$ = this.photosService
    .addComment(this.photoId, comment)
    .pipe(switchMap(() => this.photosService.getComments(this.photoId)))
    .pipe(tap(() => {
      this.formComment.reset();
      alert('Comentário adicionado com sucesso!');
    }))
  }

}
