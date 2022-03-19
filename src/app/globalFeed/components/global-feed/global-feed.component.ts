import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.css']
})
export class GlobalFeedComponent implements OnInit {
  apiUrl: string = '/articles'

  constructor() { }

  ngOnInit(): void {
    
  }
}
