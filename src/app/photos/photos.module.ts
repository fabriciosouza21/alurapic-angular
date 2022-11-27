import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { CardModule } from '../shared/component/card/card.module';
import { SearchComponent } from './photo-list/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/component/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { PhotosDetailsComponent } from './photos-details/photos-details.component';
import { PhotoCommentsComponent } from './photos-details/photo-comments/photo-comments.component';
import { PhotoOwnerOnlyDirective } from './photos-details/photo-owner-only/photo-owner-only.directive';
import { ShowIfLoggedModule } from '../shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent,
    FilterByDescriptionPipe,
    LoadButtonComponent,
    SearchComponent,
    PhotosDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    ShowIfLoggedModule
  ]
})
export class PhotosModule { }
