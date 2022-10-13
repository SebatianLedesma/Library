import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //Llamada a la clase Usuario

  private baseURL = "http://localhost:8080/api/v1/usuarios";

  constructor(private httpCient : HttpClient ) { }

  //Metodo para obtener usuarios.

  obtenerListaDeUsuarios():Observable<Usuario[]>{
    return this.httpCient.get<Usuario[]>(`${this.baseURL}`);
  }
  //Metodo para registrar usuarios.
  registrarUsuario(usuario:Usuario) : Observable<Object>{
    return this.httpCient.post(`${this.baseURL}`,usuario)
  }

  //Metodo para actualizar un usuario.
  actualizarUsuario(id:number, usuario:Usuario) : Observable<Object>{
    return this.httpCient.put(`${this.baseURL}/${id}`,usuario);
  }

  //Metodo para obtener o buscar un usuario.
  obtenerUsuarioPorId(id:number) : Observable<Usuario>{
    return this.httpCient.get<Usuario>(`${this.baseURL}/${id}`);
  }

  //Metodo para eliminar o buscar un usuario.
  eliminarUsuario(id:number) : Observable<Object>{
    return this.httpCient.delete<Usuario>(`${this.baseURL}/${id}`);
  }
}
