import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.css']
})
export class FeedTogglerComponent implements OnInit, OnDestroy {
  @Input() tagName!: string

  isLoggedIn$!: Observable<boolean | null>
  value!: string
  routeSubscription!: Subscription

  constructor(
    private store: Store,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initializeValue()
  }

  initializeValue() {
    this.routeSubscription = this.route.url.subscribe(e => {
      if(e.length) {
        this.value = e[0].path
      } else {
        this.value = '/'
      }
    });
    
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe()
  }
}
