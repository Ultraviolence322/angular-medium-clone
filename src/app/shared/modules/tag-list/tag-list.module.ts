import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagListComponent } from './components/tagList/tag-list/tag-list.component';
import { MatChipsModule } from '@angular/material/chips'



@NgModule({
  declarations: [
    TagListComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule
  ],
  exports: [TagListComponent]
})
export class TagListModule { }
