import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login/login.component';
import { InicioComponent } from './main/inicio/inicio.component';
import { TablasComponent } from './main/tablas/tablas.component';
import { UsuariosComponent } from './main/tablas/usuarios/usuarios.component';
import { ProductosComponent } from './main/tablas/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    TablasComponent,
    UsuariosComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
