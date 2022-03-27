import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  //{path:'register',component:LoginComponent},
  {
    path: 'ini',
    loadChildren: () =>
      import('./main/tablas.module').then((m) => m.TablasModule),
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
