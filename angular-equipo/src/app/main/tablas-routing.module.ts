import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilanteGuard } from '../guard/vigilante.guard';
import { InicioComponent } from './inicio/inicio.component';
import { AddusComponent } from './tablas/opciones/addus/addus.component';
import { EditusComponent } from './tablas/opciones/editus/editus.component';
import { UsuariosComponent } from './tablas/usuarios/usuarios.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {path:'crearusuario',component:AddusComponent},
      {path:'editarusuario',component:EditusComponent},
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'inicio', component: InicioComponent },
      { path: '**', redirectTo: '/ini/inicio' },
    ],
    canActivateChild: [VigilanteGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablasRoutingModule {}
