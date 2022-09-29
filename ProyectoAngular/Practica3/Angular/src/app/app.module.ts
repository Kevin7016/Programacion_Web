import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPComponent } from './section/form-p/form-p.component';
import { FormHComponent } from './section/form-h/form-h.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPComponent,
    FormHComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
