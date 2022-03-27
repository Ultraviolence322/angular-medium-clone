import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedTogglerComponent } from './components/feed-toggler/feed-toggler/feed-toggler.component';
import { FeedModule } from '../feed/feed.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FeedTogglerComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    FeedModule,
    RouterModule,
  ],
  exports: [FeedTogglerComponent]
})
export class FeedTogglerModule { }
