import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.component.html',
  styleUrls: ['./pag2.component.css']
})
export class Pag2Component implements OnInit {

  pag2!:string;
  constructor() { }
  

  ngOnInit(): void {
  }

  event (){
    this.pag2="Como puedo ayudarte";
  }
}
