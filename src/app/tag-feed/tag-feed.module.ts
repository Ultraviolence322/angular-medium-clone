import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { TagFeedComponent } from './components/tag-feed/tag-feed/tag-feed.component';

const routes: Routes = [
  {
    path: 'tag/:slug',
    component: TagFeedComponent
  }
]

@NgModule({
  declarations: [
    TagFeedComponent
  ],
  imports: [
    CommonModule,
    FeedModule,
    FeedTogglerModule,
    PopularTagsModule,
    RouterModule.forChild(routes)
  ]
})
export class TagFeedModule { }
