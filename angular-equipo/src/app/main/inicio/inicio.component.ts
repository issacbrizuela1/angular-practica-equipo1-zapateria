import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  constructor(private router: Router) {}
  estado = 0;
  listarUsuarios() {
    this.estado = 1;
  }

  cerrarsesion() {
    localStorage.removeItem('token_access');

    this.router.navigate(['/login']);
    window.location.hash = 'no-back-button';
    window.location.hash = 'Again-No-back-button'; //chrome
    window.onhashchange = function () {
      window.location.hash = 'no-back-button';
    };
  }

  ngOnInit(): void {}
}
