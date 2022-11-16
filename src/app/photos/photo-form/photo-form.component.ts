import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhotosService } from '../photos.service';
import { AlertService } from '../../shared/component/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  file: File = {} as File;
  preview = "";

  photoForm : FormGroup = this.fb.group({
    file: ['', Validators.required],
    description: ['', [Validators.maxLength(300),Validators.minLength(3), Validators.required]],
    allowComments: [true]
  });

  constructor(private fb: FormBuilder, private photosService: PhotosService, private router : Router, private alertService :AlertService, private userService: UserService) { }

  ngOnInit(): void {
  }

  upload(){
    const description = this.description?.value;
    const allowComments = this.photoForm.get('allowComments')?.value;
    this.photosService.upload(description, allowComments, this.file).
      subscribe({
        next: ()=> {
          this.alertService.success("Upload complete", true);
          this.router.navigate(['/user', this.userService.getUserName()]);

        },
      })
  }

  fileChange(event: any){
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(this.file);
  }

  get fileInupt(){
    return this.photoForm.get('file');
  }

  get description(){
    return this.photoForm.get('description');
  }


}
