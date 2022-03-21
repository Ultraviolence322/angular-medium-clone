import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { StoreModule } from '@ngrx/store';
import { feedReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PaginationModule } from '../pagination/pagination.module';


@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    PaginationModule,
    MatCardModule,
    MatButtonModule,
    StoreModule.forFeature('feed', feedReducer),
    EffectsModule.forFeature([GetFeedEffect])
  ],
  exports: [
    FeedComponent
  ]
})
export class FeedModule { }
