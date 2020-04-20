import { Injectable } from '@angular/core';
import { Clientes } from '../model/Clientes';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
   ruta: string = 'http://localhost:53560/api/Clientes';
  constructor(private http:HttpClient) { }



   ValidarCliente(cliente: Clientes) : Observable<Clientes>{
     const myHeader = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
     let param = JSON.stringify(cliente);
     console.log('Ingreso al servicio');   
    return  this.http.post<Clientes>(this.ruta + '/Recuperar' ,param, {headers : myHeader} );
   }


}
