import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { CardModule } from '../shared/componet/card/card.module';
import { SearchComponent } from './photo-list/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/componet/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { ImmediateClickModule } from '../shared/directives/immediate-click.directive';
import { PhotosDetailsComponent } from './photos-details/photos-details.component';

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
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    ImmediateClickModule
  ]
})
export class PhotosModule { }
