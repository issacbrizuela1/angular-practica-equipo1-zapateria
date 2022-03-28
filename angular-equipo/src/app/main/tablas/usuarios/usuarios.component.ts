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
  nuevoUsuario() {
    this.router.navigate(['ini/crearusuario']);
  }
  editarus(usuario: User) {
    localStorage.setItem('id', usuario.id.toString());
    this.router.navigate(['ini/editarusuario']);
  }
  deleteUsuario(id: string) {
    this.service.deletUsuario(id).subscribe(
      (res) => {
        console.log(res);
        this.ngOnInit();
      },
      (err) => console.error(err)
    );
  }
}
