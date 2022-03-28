import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.css']
})
export class TagFeedComponent implements OnInit, OnDestroy {
  apiUrl: string = ''
  tag!: string
  routeParamsSubscription!: Subscription

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeParamsSubscription = this.route.params.subscribe(params => {
      this.tag = params['slug']
      this.apiUrl = `/articles?tag=${this.tag}`
    })
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription.unsubscribe()
  }
}
