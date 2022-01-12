import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params, Router } from '@angular/router';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {

  todosUsuarios
  receptor
  id            = 0
  hora          
  valorInput    = ''
  valorRecibido = ''
  escribiendo   = false
  dateTime : Date
  
  conversacion = []

  constructor(
    public rutaActiva : ActivatedRoute,
    public ruta       : Router,
    public datos      : DatosService
  ){ 
    this.id = rutaActiva.snapshot.params.id
    this.todosUsuarios = datos.usuarios
  }

  ngOnInit(): void {
    console.log( this.id )
    console.log( this.todosUsuarios )

    this.receptor = this.todosUsuarios.find( cadaUsuario => cadaUsuario.id == this.id )
    this.conversacion = this.receptor.conversacion
  }

  // nombre1 = this.receptor.conversacion[0].usuario
  // nombre2 = this.receptor.conversacion[1].usuario

  enviarMensaje() {
    
    let nuevoMensaje : any = {
      // usuario :  this.nombre1,    //(conversacion.usuario)
      envio   : 'yo',
      mensaje : this.valorInput,
      hora    : this.hora
    }
    this.receptor.conversacion.push( nuevoMensaje )
  }
  recibirMensaje() {
    let nuevoMensaje : any = {
      // usuario : this.nombre2,    //(conversacion.usuario)
      envio   : 'el',
      mensaje : this.valorRecibido,
      hora    : this.hora
    }
    this.receptor.conversacion.push( nuevoMensaje )
  }
  usuarioEscribiendo(){
    this.escribiendo = true
  }
  usuarioNoEscribiendo(){
    this.escribiendo = false
  }
}
