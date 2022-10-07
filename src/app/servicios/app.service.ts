import { HeaderLi } from './../interfaces/interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  cabecera : Array<HeaderLi> = [
    {
      ruta  : '/estados',
      clase : 'fas fa-circle-notch',
      span  : 'Estados'
    },
    {
      ruta  : '/llamadas',
      clase : 'fas fa-phone-alt',
      span  : 'Llamadas'
    },
    {
      ruta  : '/camara',
      clase : 'fas fa-camera',
      span  : 'Cámara'
    },
    {
      ruta  : '/chats',
      clase : 'fas fa-comments',
      span  : 'Chats',
      num   : 1
    },
    {
      ruta  : '/configuracion',
      clase : 'fas fa-cog',
      span  : 'Configuración'
    }
  ]
  // ------------- Configuración -------------
  config : Array<Object> = [
    {
      icon : 'fas fa-star',
      h4   : 'Mensajes destacados'
    },
    {
      icon : 'fas fa-laptop',
      h4   : 'Whatsapp Web'
    },
    {
      icon : 'fas fa-key',
      h4   : 'Cuenta'
    },
    {
      icon : 'fab fa-whatsapp',
      h4   : 'Chats',
      num  : '1',
    },
    {
      icon : 'far fa-square',
      h4   : 'Notificaciones'
    },
    {
      icon : 'fas fa-exchange-alt',
      h4   : 'Almacenamiento y datos'
    },
    {
      icon : 'fas fa-info',
      h4   : 'Ayuda'
    },
    {
      icon : 'far fa-heart',
      h4   : 'Invitar amigos'
    }
  ]
}
