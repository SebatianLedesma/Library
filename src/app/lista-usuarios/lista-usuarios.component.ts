import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios:Usuario[];

  constructor() { }

  ngOnInit(): void {
    this.usuarios = [{
      "id":1,
      "nombre":"Sebastian",
      "apellidoP":"Ledesma",
      "apellidoM":"Genga",
      "sanctions":"0",
      "sanc_money": "0",
      "tel": "3516485145",
      "domicilio": "Agustin"
    },
    {
      "id":1,
      "nombre":"Diego",
      "apellidoP":"Ledesma",
      "apellidoM":"Genga",
      "sanctions":"0",
      "sanc_money": "0",
      "tel": "3516485145",
      "domicilio": "Agustin"

    }
  ];
  }

}
