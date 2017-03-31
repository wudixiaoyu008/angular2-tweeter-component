import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {TweetComponent} from './tweet.component';
import {TweetService} from './tweet.service';
import {LikeComponent} from './like.component';


@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
