import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss']
})
export class EstadosComponent implements OnInit {

  usuarios : Array<Object> = []

  constructor(
    public datos : DatosService
  ) {
    this.usuarios = datos.usuarios
   }

  ngOnInit(): void {
  }

}
