import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/modelos/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL=environment.apiURL;
  constructor(private http:HttpClient) { }
  gettoken(){
    return this.http.get<any>(`${this.apiURL}token`);
  }
  registro(user:User):Observable<any>{
    return this.http.post(`${this.apiURL}register`,user);
  }

  login(user:User):Observable<any>{
    return this.http.post(`${this.apiURL}login`,user);
  }
}
