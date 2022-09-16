import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeccionComponent } from './seccion/seccion/seccion.component';
import { HeaderComponent } from './seccion/header/header.component';
import { EnviadoComponent } from './seccion/enviado/enviado.component';

@NgModule({
  declarations: [
    AppComponent,
    SeccionComponent,
    HeaderComponent,
    EnviadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
