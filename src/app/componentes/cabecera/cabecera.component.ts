import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from 'src/app/servicios/datos.service';

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
    private datos : DatosService
  ) {
    this.cabecera = datos.cabecera
  }

  ngOnInit(): void {
  }
  viajar( x ){
    this.router.navigate([x])
  }

  esActivo( x ){
    
    //   console.log( x ) //El parámetro
    //   console.log( this.router.url )// La página actual

  return x === this.router.url ? true : false   //Versión corta

  //----------- Versión larga ----------
  // if( x === this.router.url ){
  //   return true
  //   }else{
  //        return false
  //   }

  }
}
