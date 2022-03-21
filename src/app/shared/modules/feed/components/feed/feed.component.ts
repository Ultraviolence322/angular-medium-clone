import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { parseUrl, stringify } from 'query-string';
import { Observable, Subscription } from 'rxjs';
import { getFeedAction } from '../../store/actions/getFeed.action';
import { errorSelector, feedSelector, isLoadinSelector } from '../../store/selectors';
import { getFeedResponseInterface } from '../../types/getFeedResponse.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input() apiUrl!: string

  feed$!: Observable<getFeedResponseInterface | null>
  isLoading$!: Observable<boolean>
  error$!: Observable<string | null>
  baseUrl!: string
  queryParamsSubscription!: Subscription
  page!: number
  limit!: number

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector))
    this.isLoading$ = this.store.pipe(select(isLoadinSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.baseUrl = this.router.url.split('?')[0];
    this.limit = 2
    this.queryParamsSubscription = this.route.queryParams.subscribe(params => {
      this.page = params['page'] || 1
      this.fetchFeed()
    })
  }

  fetchFeed(): void {
    const offset = this.page * this.limit - this.limit
    console.log('offset', offset);
    
    const parsedUrl = parseUrl(this.apiUrl)
    console.log('parsedUrl', parsedUrl);

    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    })
    console.log('stringifiedParams', stringifiedParams);

    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
    console.log('apiUrlWithParams', apiUrlWithParams);
    
    this.store.dispatch(getFeedAction({url: apiUrlWithParams}))
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }
}
