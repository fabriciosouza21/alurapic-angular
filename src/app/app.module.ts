import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { PhotosModule } from './photos/photos.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './shared/componet/card/card.component';
import { SigninComponent } from './home/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    ErrorsModule,
    HomeModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
