import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthInterceptor } from './auth/services/authInterceptor.service';
import { GlobalFeedModule } from './globalFeed/globalFeed.module';
import { TopBarModule } from './shared/modules/top-bar/topBar.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { MyFeedModule } from './my-feed/my-feed.module';
import { TagFeedModule } from './tag-feed/tag-feed.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    GlobalFeedModule,
    MyFeedModule,
    TagFeedModule,
    TopBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
