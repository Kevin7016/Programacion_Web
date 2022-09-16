import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './seccion/header/header.component';
import { TextoComponent } from './seccion/texto/texto.component';
import { ContainerComponent } from './seccion/container/container.component';
import { Pag2Component } from './seccion/pag2/pag2.component';
import { Container2Component } from './seccion/container2/container2.component';
import { HomeComponent } from './home/home.component';
import { Seccion2Component } from './seccion2/seccion2.component';
import { BarraComponent } from './seccion/barra/barra.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextoComponent,
    ContainerComponent,
    Pag2Component,
    Container2Component,
    HomeComponent,
    Seccion2Component,
    BarraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
