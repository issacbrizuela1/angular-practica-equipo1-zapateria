import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { errorMessage, successDialog } from 'src/app/funciones/alertas';
import { User } from 'src/app/modelos/user';
import { AuthService } from 'src/app/servicio/auth/auth.service';

@Component({
  selector: 'app-addus',
  templateUrl: './addus.component.html',
  styleUrls: ['./addus.component.css'],
})
export class AddusComponent implements OnInit {
  usuario: User = {
    id: null,
    tipo_usuario: 0,
    username: '',
    email: '',
    password: '',
    estado: 0,
  };
  edit: boolean = false;
  constructor(
    private router: Router,
    private service: AuthService,
    private activedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  regresarAut() {
    this.router.navigate(['ini/inicio']);
  }

  GuardarUsuario() {
    this.service.addUsuario(this.usuario).subscribe(
      (res) => {
        console.log(res), alert('AGREGADO');
        
        this.router.navigate(['ini/inicio']);
      },
      (err) => {
        console.error(err, 'ERROR');
      }
    );
  }
}
