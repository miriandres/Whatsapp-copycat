import { Component, Input, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  @Input() seccion : string = 'ninguna'
  
  @Input() info : any =  {
    h2     : 'Miri',
    h3     : 'Disponible',
    chat   : '¡Hola!',
    estado : 12,
    fecha  : '11/12/2020',
    img    : 'assets/usuario-anna.jpg'
  }

  constructor(
    // public datos : DatosService,
  ) { 
    // this.usuarios = datos.usuarios
  }

  ngOnInit(): void {
  }

}
