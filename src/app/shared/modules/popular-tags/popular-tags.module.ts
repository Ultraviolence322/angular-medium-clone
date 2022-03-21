import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './components/popular-tags/popular-tags/popular-tags.component';
import { TagListModule } from '../tag-list/tag-list.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { getPopularTagsEffect } from './store/effects/getPopularTags.effect';
import { popularTagsReducer } from './store/reducer';



@NgModule({
  declarations: [
    PopularTagsComponent
  ],
  imports: [
    CommonModule,
    TagListModule,
    StoreModule.forFeature('popular-tags', popularTagsReducer),
    EffectsModule.forFeature([getPopularTagsEffect])
  ],
  exports: [PopularTagsComponent]
})
export class PopularTagsModule { }
