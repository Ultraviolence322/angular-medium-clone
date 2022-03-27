import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFeedComponent } from './components/my-feed/my-feed/my-feed.component';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feed',
    component: MyFeedComponent
  }
]

@NgModule({
  declarations: [
    MyFeedComponent
  ],
  imports: [
    CommonModule,
    FeedModule,
    FeedTogglerModule,
    PopularTagsModule,
    RouterModule.forChild(routes)
  ]
})
export class MyFeedModule { }
