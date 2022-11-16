import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from 'src/app/shared/component/alert/alert.service';
import { PhotoComment } from '../photo-comment';
import { Photo } from '../photo.interface';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos-details',
  templateUrl: './photos-details.component.html',
  styleUrls: ['./photos-details.component.css']
})
export class PhotosDetailsComponent implements OnInit {

  photo$: Observable<Photo>;

  constructor(
    private router: ActivatedRoute,
    private photoService: PhotosService,
    private routerNavegation : Router,
    private alertService: AlertService,
    private userService: UserService
  ) {
    const id = this.router.snapshot.params["photoId"];
    this.photo$ = this.photoService.findById(id);
    this.photo$.subscribe({
      error: err => {
       this.routerNavegation.navigate(['/not-found']);
        console.log(err);
      }
    });
  }

  ngOnInit(): void {

  }

  remove(photo: Photo) {
    this.photoService.removePhoto(photo.id).subscribe(
      {
        next: () => {
          this.alertService.success("Photo removed", false);
          this.routerNavegation.navigate(['/user', this.userService.getUserName()]);
        },
        error: err => {
          this.alertService.danger("Could not delete the photo!", true);
          console.log(err);
        }
      }
    );

  }

}
