import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modelos/user';
import { AuthService } from 'src/app/servicio/auth/auth.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarioForm!: FormGroup;
  usuario: any = [];
  constructor(private router: Router, private service: AuthService) {}

  ngOnInit(): void {
    this.service.getUsuarios().subscribe(
      (res) => {
        this.usuario = res;
      },
      (err) => console.error(err)
    );
  }
}
