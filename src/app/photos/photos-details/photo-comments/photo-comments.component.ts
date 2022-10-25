import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.photosService.addComment(this.photoId, comment)
      .subscribe({
        next: () => {
          this.formComment.reset();
          alert('Comentário salvo com sucesso!');
        }
      });

  }

}
