import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getPopularTagsResponseInterface } from '../types/getPopularTagsResponseInterface.interface';

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService {

  constructor(
    private http: HttpClient
  ) { }

  getPopularTags(): Observable<getPopularTagsResponseInterface> {
    return this.http.get<getPopularTagsResponseInterface>(environment.apiUrl + '/tags')
  }
}
