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

    obtenerListaUsuarios():Observable<Usuario[]>{

      return this.httpCient.get<Usuario[]>(`${this.baseURL}`);
    }

}
