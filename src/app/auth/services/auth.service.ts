import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RegisterRequestInterface } from 'src/app/shared/types/registerRequest.interface';
import { CurrentUserResponseInterface } from 'src/app/shared/types/currentUserResponse.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: RegisterRequestInterface): Observable<CurrentUserResponseInterface> {
    const url = environment.apiUrl + '/users'
    
    return this.http.post<CurrentUserResponseInterface>(url, data)
  }
}
