import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { currentUserSelector, isLoggedInSelector } from 'src/app/auth/store/selectors';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean | null>
  currentUser$!: Observable<CurrentUserInterface | null>
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store
      .pipe(select(isLoggedInSelector))
    this.currentUser$ = this.store
      .pipe(select(currentUserSelector))
  }

}
