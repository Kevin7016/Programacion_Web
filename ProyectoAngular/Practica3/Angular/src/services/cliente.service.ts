import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Cliente } from 'src/shared/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  cliente!: Cliente

  private readonly url = 'https://crudcrud.com/api/14e5e30e9cbf47a7a5727ade50332abb/cliente';
  constructor(private readonly http: HttpClient) { }

list():Observable<Cliente[]>{
  return this.http.get<Cliente[]>(this.url)
}
}
