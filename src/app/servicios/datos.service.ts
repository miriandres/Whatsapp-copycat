import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {


// -------------- Componentes --------------
  cabecera : Array<Object> = [
    {
      ruta  : '/estados',
      clase : 'fas fa-circle',
      texto : 'Estados'
    },
    {
      ruta  : '/llamadas',
      clase : 'fas fa-phone-alt',
      texto : 'Llamadas'
    },
    {
      ruta  : '/camara',
      clase : 'fas fa-camera',
      texto : 'Cámara'
    },
    {
      ruta  : '/chats',
      clase : 'fas fa-comments',
      texto : 'Chats'
    },
    {
      ruta  : '/configuracion',
      clase : 'fas fa-cog',
      texto : 'Configuración'
    },
  ]
  usuarios : Array<Object> = [
    {
      id      :  1,
      h2      :  'Yodita lovers ♡♡',
      h3      :  'Disponible',
      chat    :  'Yodita: Mucho que aprender todavía tienes',
      estado  :  'Hoy 14:35',
      date    :  '19:07',
      llamada :  'Entrante',
      img     :  'assets/baby-yoda.jpg',
      conversacion : [
        {
          usuario : 'Miri',
          envio   : 'yo',
          mensaje : '¿Crees que podré usar ya la fuerza?',
          hora    :  12.39
        },
        {
          usuario : 'Yodita',
          envio   : 'el',
          mensaje : 'Mucho que aprender todavía tienes',
          hora    : 12.43
        }
      ]
    },
    {
      id           :  2,
      h2           :  'Elsa',
      h3           :  'Disponible',
      chat         :  'The cold never bother me anyway',
      estado       :  'Hoy 12:59',
      date         :  '18:26',
      llamada      :  'Perdida',
      img          :  'assets/usuario-elsa.jpg',
      conversacion : [
        {
          usuario : 'Miri',
          envio   : 'yo',
          mensaje : 'Let it go',
          hora    :  12.39
        },
        {
          usuario : 'Elsa',
          envio   : 'el',
          mensaje : 'The cold never bother me anyway',
          hora    : 12.42
        }
      ]
    },
    {
      id      :  3,
      h2      :  'Mulán',
      h3      :  'Disponible',
      chat    :  '¿Mis ancestros envían a un lagarto para ayudarme?',
      estado  :  'Hace 10 horas',
      date    :  '15:02',
      llamada :  'Saliente',
      img     :  'assets/usuario-mulan.jpg'
    },
    {
      id      :  4,
      h2      :  'Jasmine',
      h3      :  'No disponible',
      chat    :  '¡No es un príncipe! Era el chico del mercado',
      estado  :  'sábado',
      date    :  'Ayer',
      llamada :  'Saliente',
      img     :  'assets/usuario-jasmine.jpg'
    },
    {
      id      :  5,
      h2      :  'Charmander',
      h3      :  'No disponible',
      chat    :  '🔥🔥🔥',
      estado  :  'sábado',
      date    :  'jueves',
      llamada :  'Entrante',
      img     :  'assets/usuario-4.jpg'
    },
    {
      id      :  6,
      h2      :  'Bulbasaur',
      h3      :  'No disponible',
      chat    :  'SAURRR!',
      estado  :  'Hace 1 día',
      date    :  '27/10/2020',
      llamada :  'Perdida',
      img     :  'assets/usuario-5.jpg'
    },
    {
      id      :  7,
      h2      :  'Pikachu',
      h3      :  'No disponible',
      chat    :  '¿Pika pika?',
      estado  :  'Hace 2 días',
      date    :  '26/10/2020',
      llamada :  'Entrante',
      img     :  'assets/usuario-6.jpg'
    },
    {
      id      :  8,
      h2      :  'Psyduck',
      h3      :  'No disponible',
      chat    :  'PSYY-DUCK, PSYY-DUCK',
      estado  :  'Hace 5 horas',
      date    :  '26/10/2020',
      llamada :  'Entrante',
      img     :  'assets/usuario-7.jpg'
    },
    {
      id      :  9,
      h2      :  'Togepi',
      h3      :  'No disponible',
      chat    :  'Priii',
      estado  :  'Hace 2 horas',
      date    :  '20/10/2020',
      llamada :  'Entrante',
      img     :  'assets/usuario-8.jpg'
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
      num  : '1'
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
    },
  ]

  constructor() { }
}
