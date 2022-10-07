import { Injectable } from '@angular/core';
import { UsersInfo } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  usuarios : Array<UsersInfo> = [
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
          envio   : 'outgoing',
          mensaje : '¿Crees que podré usar ya la fuerza?',
          hora    :  1603994802000
        },
        {
          envio   : 'incoming',
          mensaje : 'Mucho que aprender todavía tienes',
          hora    : 1603994862000
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
          envio   : 'outgoing',
          mensaje : 'Let it go',
          hora    :  1603992042000
        },
        {
          envio   : 'incoming',
          mensaje : 'The cold never bother me anyway',
          hora    : 1603992402000
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
      img     :  'assets/usuario-mulan.jpg',
      conversacion : [
        {
          envio   : 'incoming',
          mensaje : '¿Mis ancestros envían a un lagarto para ayudarme?',
          hora    : 1602075720000
        }
      ]
    },
    {
      id      :  4,
      h2      :  'Jasmine',
      h3      :  'No disponible',
      chat    :  '¡No es un príncipe! Era el chico del mercado',
      estado  :  'sábado',
      date    :  'ayer',
      llamada :  'Saliente',
      img     :  'assets/usuario-jasmine.jpg',
      conversacion : [
        {
          envio   : 'incoming',
          mensaje : '¡No es un príncipe! Era el chico del mercado',
          hora    : 1602002700000
        }
      ]
    },
    {
      id      :  5,
      h2      :  'Charmander',
      h3      :  'No disponible',
      chat    :  '🔥🔥🔥',
      estado  :  'sábado',
      date    :  'jueves',
      llamada :  'Entrante',
      img     :  'assets/usuario-4.jpg',
      conversacion : [
        {
          envio   : 'incoming',
          mensaje : '🔥🔥🔥',
          hora    : 1601922600000
        }
      ]
    },
    {
      id      :  6,
      h2      :  'Bulbasaur',
      h3      :  'No disponible',
      chat    :  'SAURRR!',
      estado  :  'Hace 1 día',
      date    :  '27/10/20',
      llamada :  'Perdida',
      img     :  'assets/usuario-5.jpg',
      conversacion : [
        {
          envio   : 'incoming',
          mensaje : 'SAURRR!',
          hora    : 1603801440000
        }
      ]
    },
    {
      id      :  7,
      h2      :  'Pikachu',
      h3      :  'No disponible',
      chat    :  '¿Pika pika?',
      estado  :  'Hace 2 días',
      date    :  '26/10/20',
      llamada :  'Entrante',
      img     :  'assets/usuario-6.jpg',
      conversacion : [
        {
          envio   : 'incoming',
          mensaje : '¿Pika pika?',
          hora    : 1603744080000
        }
      ]
    },
    {
      id      :  8,
      h2      :  'Psyduck',
      h3      :  'No disponible',
      chat    :  'PSYY-DUCK, PSYY-DUCK',
      estado  :  'Hace 5 horas',
      date    :  '26/10/20',
      llamada :  'Entrante',
      img     :  'assets/usuario-7.jpg',
      conversacion : [
        {
          envio   : 'incoming',
          mensaje : '¡PSYY-DUCK, PSYY-DUCK',
          hora    : 1603748160000
        }
      ]
    },
    {
      id      :  9,
      h2      :  'Togepi',
      h3      :  'No disponible',
      chat    :  'Priii',
      estado  :  'Hace 2 horas',
      date    :  '20/10/20',
      llamada :  'Entrante',
      img     :  'assets/usuario-8.jpg',
      conversacion : [
        {
          envio   : 'incoming',
          mensaje : 'Priii',
          hora    : 1603198620000
        }
      ]
    }
  ]

  constructor() { }
}
