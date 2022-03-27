import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { errorMessage, successDialog } from 'src/app/funciones/alertas';
import { Location } from '@angular/common';
import { User } from 'src/app/modelos/user';
import { AuthService } from 'src/app/servicio/auth/auth.service';

@Component({
  selector: 'app-editus',
  templateUrl: './editus.component.html',
  styleUrls: ['./editus.component.css']
})

export class EditusComponent implements OnInit {
  usuario:any=[];
  constructor(private router:Router,private service:AuthService) { }
  regresarAut(){
    this.router.navigate(['ini/inicio'])
  }
  ngOnInit(): void {
    this.EditarUs()
  }
  EditarUs(){
    let id:string|null|number=localStorage.getItem("id");
    this.service.getUsuario(id).subscribe(data=>{
      this.usuario=data;
    })
  }
  actualizar(usuario:User){
    this.service.updateUsuario(usuario).subscribe(data=>{
      this.usuario=data;
      alert("actualizado con exito")
      this.router.navigate(["ini/inicio"])
    })
  }

}
