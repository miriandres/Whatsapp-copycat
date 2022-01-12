import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minicabecera',
  templateUrl: './minicabecera.component.html',
  styleUrls: ['./minicabecera.component.scss']
})
export class MinicabeceraComponent implements OnInit {

  @Input() titulo      : string = 'Valor por defecto'
  @Input() atrasBtn    : boolean = false
  @Input() editarBtn   : boolean = true
  @Input() escribirBtn : boolean = true
  @Input() llamarBtn   : boolean = false
  @Input() grabarBtn   : boolean = false

  constructor(
    public router : Router
  ) { }

  ngOnInit(): void {}

  viajar( x ) {
    this.router.navigate([ '/chats'])
  }

}
