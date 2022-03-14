import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { CurrentUserResponseInterface } from '../types/currentUserResponse.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUser(response: CurrentUserResponseInterface): CurrentUserInterface {
    return response.user
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'
    
    return this.http
      .post<CurrentUserResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login'
    
    return this.http
      .post<CurrentUserResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  checkCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user'
    return this.http.get<CurrentUserResponseInterface>(url).pipe(map(this.getUser))
  }
}
