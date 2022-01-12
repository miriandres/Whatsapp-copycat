import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { CamaraComponent } from './pages/camara/camara.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { EstadosComponent } from './pages/estados/estados.component';
import { LlamadasComponent } from './pages/llamadas/llamadas.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';

const routes: Routes = [
  { path : 'estados'         , component : EstadosComponent},
  { path : 'llamadas'        , component : LlamadasComponent},
  { path : 'camara'          , component : CamaraComponent},
  { path : 'chats'           , component : ChatsComponent},
  { path : 'configuracion'   , component : ConfiguracionComponent},
  { path : 'cabecera'        , component : CabeceraComponent},
  { path : 'mensajes/:id'    , component : MensajesComponent},
  { path : ''                , component : EstadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
