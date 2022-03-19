import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getFeedAction } from '../../store/actions/getFeed.action';
import { errorSelector, feedSelector, isLoadinSelector } from '../../store/selectors';
import { getFeedResponseInterface } from '../../types/getFeedResponse.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  @Input() apiUrl!: string

  feed$!: Observable<getFeedResponseInterface | null>
  isLoading$!: Observable<boolean>
  error$!: Observable<string | null>

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues() {
    this.feed$ = this.store.pipe(select(feedSelector))
    this.isLoading$ = this.store.pipe(select(isLoadinSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fetchData() {
    this.store.dispatch(getFeedAction({url: this.apiUrl}))
  }
}
