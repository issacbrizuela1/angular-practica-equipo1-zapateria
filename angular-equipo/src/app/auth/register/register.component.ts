import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { errorMessage, timeMessage } from 'src/app/funciones/alertas';
import { User } from 'src/app/modelos/user';
import { AuthService } from 'src/app/servicio/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registroForm!: FormGroup;
  user!: User;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.createFrom();
  }

  ngOnInit(): void {}
  registro(): void {
    if (this.registroForm.invalid) {
      return Object.values(this.registroForm.controls).forEach((control) => {
        control.markAllAsTouched();
      });
    } else {
      this.setUser();
      console.log(this.setUser());
      this.authService.registro(this.user).subscribe(
        (data: any) => {
          timeMessage('Registrado', 1500);
          console.log(this.user);
          this.router.navigate(['/login']);
        },
        (_error) => {
          errorMessage('Ha ocurrido un error.');
          console.log(this.user);
        }
      );
    }
  }
  registros(): void {
    if (this.registroForm.invalid) {
      return Object.values(this.registroForm.controls).forEach((control) => {
        control.markAllAsTouched();
      });
    } else {
      this.setUser();
      console.log(this.setUser());
      this.authService.registro(this.user).subscribe(
        (data: any) => {
          timeMessage('Registrado', 1500);
          console.log(this.user);
          //this.router.navigate(['/login']);
        },
        (_error) => {
          errorMessage('Ha ocurrido un error.');
          console.log(this.user);
        }
      );
    }
  }
  createFrom(): void {
    this.registroForm = this.fb.group({
      email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password:['',[Validators.required]],
      password2:['',[Validators.required]],
      tipo_usuario: [Number],
      username:[''],
      estado: [Number],
    });
  }

  get emailValidate() {
    return (
      this.registroForm.get('email')?.invalid &&
      this.registroForm.get('email')?.touched
    );
  }
  get passwordValidate() {
    return (
      this.registroForm.get('password')?.invalid &&
      this.registroForm.get('password')?.touched
    );
  }
  get password2Validate() {
    const pass = this.registroForm.get('password')?.value;
    const pass2 = this.registroForm.get('password2')?.value;
    return pass === pass2 ? false : true;
  }

  setUser(): void {
    this.user = {
      email: this.registroForm.get('email')?.value,
      password: this.registroForm.get('password')?.value,
      password2: this.registroForm.get('password_confirmation')?.value,
      tipo_usuario: 1,
      username:this.registroForm.get('username')?.value,
      estado: 1,
    };
  }
}
