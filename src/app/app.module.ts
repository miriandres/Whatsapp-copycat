import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { LlamadasComponent } from './pages/llamadas/llamadas.component';
import { EstadosComponent } from './pages/estados/estados.component';
import { CamaraComponent } from './pages/camara/camara.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { MinicabeceraComponent } from './componentes/minicabecera/minicabecera.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { DatosService } from './servicios/datos.service';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ChatsComponent,
    LlamadasComponent,
    EstadosComponent,
    CamaraComponent,
    ConfiguracionComponent,
    MinicabeceraComponent,
    UsuarioComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
