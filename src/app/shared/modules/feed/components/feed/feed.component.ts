import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
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

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector))
    this.isLoading$ = this.store.pipe(select(isLoadinSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.baseUrl = this.router.url.split('?')[0];
    this.queryParamsSubscription = this.route.queryParams.subscribe(params => {
      this.page = params['page'] || 1
    })
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrl}))
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }
}
