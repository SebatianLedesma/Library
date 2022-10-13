import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-detalles',
  templateUrl: './usuario-detalles.component.html',
  styleUrls: ['./usuario-detalles.component.css']
})
export class UsuarioDetallesComponent implements OnInit {

  id:number;
  usuario:Usuario;

  constructor(private route:ActivatedRoute,private usuarioServicio:UsuarioService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usuario = new Usuario();
    this.usuarioServicio.obtenerUsuarioPorId(this.id).subscribe(dato=>{
      this.usuario = dato;
    })
  }

}
