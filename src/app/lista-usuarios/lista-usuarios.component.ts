import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios:Usuario[];

  constructor(private usuarioServicio:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  actualizarUsuario(id:number){
    this.router.navigate(['actualizar-usuario',id])
  }

  private obtenerUsuarios(){
    this.usuarioServicio.obtenerListaDeUsuarios().subscribe(dato=>{
      this.usuarios = dato
    });
  }

  eliminarUsuario(id:number){
    this.usuarioServicio.eliminarUsuario(id).subscribe(dato=>{
      this.obtenerUsuarios();
    });
  }

  verDetallesDelUsuario(id:number){
    this.router.navigate(['usuario-detalles',id]);
  }

}


