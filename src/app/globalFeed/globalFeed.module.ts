import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { RouterModule, Routes } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent
  }
]

@NgModule({
  declarations: [
    GlobalFeedComponent
  ],
  imports: [
    CommonModule,
    FeedModule,
    PopularTagsModule,
    MatChipsModule,
    MatGridListModule,
    MatTabsModule,
    RouterModule.forChild(routes)
  ]
})

export class GlobalFeedModule { }
