import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  @Input() seccion : string = 'ninguna'
  
  @Input() info : any = {
    h2     : 'Miri',
    h3     : 'Disponible',
    chat   : '¡Hola!',
    estado : 12,
    fecha  : '11/12/20',
    img    : 'assets/usuario-anna.jpg'
  }

  constructor(
  ) { 
  }

  ngOnInit(): void {
  }

}
