import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-llamadas',
  templateUrl: './llamadas.component.html',
  styleUrls: ['./llamadas.component.scss']
})
export class LlamadasComponent implements OnInit {

  usuarios : Array<Object> = []

  constructor(
    public datos : DatosService
  ) {
    this.usuarios = datos.usuarios
   }

  ngOnInit(): void {
  }

}
