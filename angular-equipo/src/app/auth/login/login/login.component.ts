import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { errorMessage, successDialog, timeMessage } from 'src/app/funciones/alertas';
import { User } from 'src/app/modelos/user';
import {CookieService} from 'ngx-cookie-service'
import { AuthService } from 'src/app/servicio/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  user!:User;
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router,private cookieService:CookieService) {
    this.createFrom();
    this.login();
   }
  ngOnInit(): void {
  }

  login():void{
    if (this.loginForm.invalid) {
      return Object.values(this.loginForm.controls).forEach(control=>{
        control.markAllAsTouched();
      })
    }
    else{
      this.setUser();
      this.authService.login(this.user).subscribe((data:any)=>{
        successDialog('Iniciado').then(()=>{
          //this.cookieService.set('token_access',data.token,4,'/')
         if (localStorage.getItem("token_access")) {
           localStorage.removeItem("token_access")
           console.log("Si hay token y lo elimine")
         }
          localStorage.setItem("token_access",data.token)
          console.log("AQUI SETEO TOKEN   " +data.token)
          this.router.navigate(['ini/inicio']);
        })
      },error=>{
        errorMessage('Usuario o contraseña incorrectas');
      })
    }
  }
  get emailValidate(){
    return(
      this.loginForm.get('email')?.invalid && this.loginForm.get('email')?.touched
    )
  }
  get passwordValidate(){
    return(
      this.loginForm.get('password')?.invalid && this.loginForm.get('password')?.touched
    )
  }
  createFrom():void{
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password:['',[Validators.required]],
    });
  }
  setUser():void{
    this.user={
      email:this.loginForm.get('email')?.value,
      password:this.loginForm.get('password')?.value
    }
  }
}
