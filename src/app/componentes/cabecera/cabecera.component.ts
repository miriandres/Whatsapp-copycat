import { AppService } from './../../servicios/app.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  cabecera : Array<object> = []

  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private appService : AppService
  ) {
    this.cabecera = appService.cabecera
  }

  ngOnInit(): void {
  }
  viajar( x ){
    this.router.navigate([x])
  }

  esActivo( x ){
    return x === this.router.url ? true : false
  }
}
