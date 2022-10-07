import { AppService } from './../../servicios/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss']
})
export class ConfiguracionComponent implements OnInit {

  config : Array<Object> = []

  constructor(
    private appService : AppService
  ){ 
    this.config = appService.config
  }

  ngOnInit(): void {
  }

}
