import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Pag2Component } from './seccion/pag2/pag2.component';

const routes: Routes = [
  {path:'Home', component:HomeComponent},
  {path:'Pag2', component:Pag2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
