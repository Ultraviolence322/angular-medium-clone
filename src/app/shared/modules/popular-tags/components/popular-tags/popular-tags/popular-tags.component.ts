import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TagType } from 'src/app/shared/types/tag.type';
import { getPopularTagsAction } from '../../../store/actions/getTags.action';
import { popularTagsSelector, isLoadingSelector, errorSelector,  } from '../../../store/selectors';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.css']
})
export class PopularTagsComponent implements OnInit {
  tags$!: Observable<TagType[] | null>
  isLoading$!: Observable<boolean>
  error$!: Observable<string | null>
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeValues()
    this.fetchPopularTags()
  }

  initializeValues(){
    this.tags$ = this.store.pipe(select(popularTagsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fetchPopularTags() {
    this.store.dispatch(getPopularTagsAction())
  }
}
