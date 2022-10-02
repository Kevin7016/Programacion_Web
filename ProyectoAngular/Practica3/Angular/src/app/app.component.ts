import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EMPLEADOS';

  empleados:Empleado[]=[
    new Empleado("Juan","Diaz","Admin",8000),
    new Empleado("Alberto","Sanchez","Director",6000),
    new Empleado("Nidia","Olam","Jefa de Seccion",5000),
    new Empleado("Fernando","Chi","Administrativo",2000),

  ];
  agregarE(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}
