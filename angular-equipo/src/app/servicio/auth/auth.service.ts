import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/modelos/user';
import { LUser } from 'src/app/modelos/luser';

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

  login(user:LUser):Observable<any>{
    return this.http.post(`${this.apiURL}login`,user);
  }

  //usuarios
  getUsuarios(){
    return this.http.get<User[]>(`${this.apiURL}usuario`);
  }
  addUsuario(usuario:User){
    return this.http.post(`${this.apiURL}usuario`,usuario);
  }
  getUsuario(id:number|string|null){
    return this.http.get(`${this.apiURL}usuario/${id}`);
  }
  deletUsuario(id:string){
    return this.http.delete(`${this.apiURL}usuario/${id}`);
  }
  updateUsuario(updateUsuario:User):Observable<User>{
    return this.http.patch<User>(`${this.apiURL}usuario/${updateUsuario.id}`,updateUsuario)
  } 
}
