import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from 'src/app/empleado.model';

@Component({
  selector: 'app-form-h',
  templateUrl: './form-h.component.html',
  styleUrls: ['./form-h.component.css']
})
export class FormHComponent implements OnInit {

  

 @Input() empleadoL:Empleado;
 @Input() indice:number;

  constructor() { 
      
   
  }
  ngOnInit(): void {
  }

}
