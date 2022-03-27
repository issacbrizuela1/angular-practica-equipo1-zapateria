import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablasRoutingModule } from './tablas-routing.module';
import { InicioComponent } from '../main/inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './tablas/usuarios/usuarios.component';
import { EditusComponent } from './tablas/opciones/editus/editus.component';
import { AddusComponent } from './tablas/opciones/addus/addus.component';

@NgModule({
  declarations: [InicioComponent,UsuariosComponent,EditusComponent,AddusComponent],
  imports: [
    CommonModule,
    TablasRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class TablasModule {}
