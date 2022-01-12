import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss']
})
export class ConfiguracionComponent implements OnInit {

  config : Array<Object> = []

  constructor(
    private datosService : DatosService
  ){ 
    this.config = datosService.config
  }

  ngOnInit(): void {
  }

}
