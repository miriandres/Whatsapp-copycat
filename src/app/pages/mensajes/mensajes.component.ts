import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {

  todosUsuarios
  receptor
  usuario       : string
  id            : number = 0             
  valorInput    : string = ''
  valorRecibido : string = ''
  escribiendo   : boolean  = false
  hora          : number  = Date.now()
  
  conversacion  : Array<any> = []

  constructor(
    public rutaActiva : ActivatedRoute,
    public ruta       : Router,
    public datos      : DatosService
  ){ 
    this.id = rutaActiva.snapshot.params.id
    this.todosUsuarios = datos.usuarios
  }

  ngOnInit(): void {
    this.receptor = this.todosUsuarios.find( cadaUsuario => cadaUsuario.id == this.id )
    this.conversacion = this.receptor.conversacion
    this.usuario = this.todosUsuarios.find(cadaUsuario => cadaUsuario.conversacion.usuario == this.usuario)
  }
  
  enviarMensaje(): void {
    let nuevoMensaje : any = {
      envio   : 'outgoing',
      mensaje : this.valorInput,
      hora    : this.hora,
    }
    this.receptor.conversacion.push( nuevoMensaje )
    this.valorInput = ''
    this.usuarioNoEscribiendo()
  }
  recibirMensaje(): void {
    let nuevoMensaje : any = {
      envio   : 'incoming',
      mensaje : this.valorRecibido,
      hora    : this.hora,
    }
    this.receptor.conversacion.push( nuevoMensaje )
    this.valorRecibido = ''
    this.usuarioNoEscribiendo()
  }
  usuarioEscribiendo(): void {
    this.escribiendo = true
  }
  usuarioNoEscribiendo():void {
    this.escribiendo = false
  }
}
