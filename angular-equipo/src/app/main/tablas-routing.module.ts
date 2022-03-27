import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilanteGuard } from '../guard/vigilante.guard';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './tablas/usuarios/usuarios.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'inicio', component: InicioComponent },
      { path: '**', redirectTo: '/inicio' },
    ],
    canActivateChild: [VigilanteGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablasRoutingModule {}