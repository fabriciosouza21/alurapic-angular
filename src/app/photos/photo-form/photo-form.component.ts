import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  file: File = {} as File;

  photoForm : FormGroup = this.fb.group({
    file: ['', Validators.required],
    description: ['', [Validators.maxLength(300),Validators.minLength(3), Validators.required]],
    allowComments: [true]
  });

  constructor(private fb: FormBuilder, private photosService: PhotosService, private router : Router) { }

  ngOnInit(): void {
  }

  upload(){
    const description = this.description?.value;
    const allowComments = this.photoForm.get('allowComments')?.value;
    this.photosService.upload(description, allowComments, this.file).
      subscribe({
        next: ()=> this.router.navigate(['']),
      })
  }

  fileChange(event: any){
    this.file = event.target.files[0];
  }

  get fileInupt(){
    return this.photoForm.get('file');
  }

  get description(){
    return this.photoForm.get('description');
  }


}
